const db = require("../config/db.config.js");
const crypto = require("crypto");
const { sendVerifyEmail } = require("../email_template/verify_email.js");
const Auth_User = db.auth_user;

//executes after pressing register
exports.verifyUserEmail = async (userId, referralCode, host) => {
  const user = await Auth_User.findById(userId);
  if (user) {
    const updateUser = await user.update({
      email_query_code: crypto.randomBytes(64).toString("hex"),
      email_verification_check: false,
    });
    const generateLink = `https://${host}/confirm-email?token=${updateUser.email_query_code}${
      referralCode ? `&ref=${referralCode}&uid=${userId}` : ``
    }`;
    await sendVerifyEmail(updateUser.first_name, updateUser.email, generateLink);
    return { name: updateUser.first_name, email: updateUser.email, isVerified: updateUser.email_verification_check };
  } else {
    return { message: "User Not Found" };
  }
};

//executes when confirm account from user email is clicked
exports.confirmUserEmail = async (token) => {
  const user = await Auth_User.findOne({ where: { email_query_code: token } });
  if (user) {
    console.log(user);
    const updateUser = await user.update({
      email_query_code: null,
      email_verification_check: true,
    });
    return { isVerified: updateUser.email_verification_check };
  } else {
    return { statusCode: 500, message: "Invalid Token, Please contact us for assistance" };
  }
};
