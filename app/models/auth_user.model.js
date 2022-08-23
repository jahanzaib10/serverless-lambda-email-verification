module.exports = (sequelize, Sequelize) => {
  const Auth_User = sequelize.define(
    "myapp_login_user",
    {
      first_name: {
        type: Sequelize.STRING(200),
      },
      last_name: {
        type: Sequelize.STRING(200),
      },
      phone_number: {
        type: Sequelize.BIGINT,
      },
      email: {
        type: Sequelize.STRING(300),
      },
      username_id: {
        type: Sequelize.INTEGER,
      },
      time_stamp: {
        type: Sequelize.Sequelize.DATE(6),
      },
      role: {
        type: Sequelize.STRING(200),
      },
      email_query_code: {
        type: Sequelize.STRING(200),
      },
      email_verification_check: {
        type: Sequelize.BOOLEAN,
      },
      facebook_login: {
        type: Sequelize.BOOLEAN,
      },
      gmail_login: {
        type: Sequelize.BOOLEAN,
      },
      normal_login: {
        type: Sequelize.BOOLEAN,
      },
      uid: {
        type: Sequelize.STRING(500),
      },
      continue_with_email: {
        type: Sequelize.BOOLEAN,
      },
      total_invites: {
        type: Sequelize.INTEGER,
      },
      accepted_invites: {
        type: Sequelize.INTEGER,
      },
      profile_pic_path: {
        type: Sequelize.STRING(510),
      },
      fcm_token: {
        type: Sequelize.STRING(510),
      },
      referral_code: {
        type: Sequelize.STRING(510),
      },
    },
    {
      tableName: "myapp_login_user",
      timestamps: false,
    }
  );

  return Auth_User;
};
