const jwt = require("jsonwebtoken");
const config = require("../config/secret");
const response = require("../res");

function verification() {
  return function (req, res, next) {
    var tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer) {
      var token = tokenWithBearer.split(" ")[1];

      //verifikasi jwt
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          //   console.log(err);
          response.data(404, "Wrong Token", err, res);
        } else {
          req.auth = decoded;
          next();
        }
      });
    } else {
      response.data(404, "Failed Authentication", [], res);
    }
  };
}
module.exports = verification;
