const verify = require("./app/controllers/verifyEmailController");

exports.handler = async (event, context, callback) => {
  const { body, queryStringParameters, httpMethod, resource, headers } = event;
  console.log("queryStringParameters: ", queryStringParameters);
  console.log("headers: ", headers);
  let result;

  if (httpMethod === "GET") {
    if (resource === "/verify-email") {
      result = await verify.verifyUserEmail(queryStringParameters["userId"], queryStringParameters["referralCode"], "domainName.com");
    }
    if (resource === "/confirm-email") {
      result = await verify.confirmUserEmail(queryStringParameters["token"]);
    }
  }

  let response = {
    statusCode: 200,
    headers: {
      "X-Requested-With": "*",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,GET,OPTIONS",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  };
  return response;
  // callback(null, { statusCode: 200, body: url });
};
