var connection = require("../connection");
var mysql = require("mysql");
var md5 = require("md5");
var ip = require("ip");
var config = require("../config/secret");
var response = require("../res");
var jwt = require("jsonwebtoken");

// controller untuk registrasi
exports.registrasi = function (req, res) {
  var post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    tanggal_daftar: req.body.tanggal_daftar,
  };

  var query = "SELECT email FROM ?? WHERE ??=?";
  var table = ["user", "email", post.email];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        var query = "INSERT INTO user SET ? ";
        // var table = ["user"];
        query = mysql.format(query);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.data(201, "Data was created", post, res);
          }
        });
      } else {
        response.data(200, "Failed to register. Email already exists", [], res);
      }
    }
  });
};

exports.login = function (req, res) {
  var post = {
    email: req.body.email,
    password: md5(req.body.password),
  };

  var query = "SELECT * FROM user WHERE email=? AND password=?";
  var condition = [post.email, post.password];

  query = mysql.format(query, condition);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 1) {
        var token = jwt.sign({ rows }, config.secret, {
          expiresIn: 60,
        });
        var data = {
          id_user: rows[0].id,
          access_token: token,
          ip_address: ip.address(),
        };

        var query = "INSERT INTO akses_token SET ?";
        connection.query(query, data, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.data(200, "JWT token was generated", data, res);
          }
        });
      } else {
        response.data(404, "Wrong email or password", [], res);
      }
    }
  });
};

exports.dashboard = function (req, res) {
  response.data(200, "Halaman dashboard", [], res);
};
