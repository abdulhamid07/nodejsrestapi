"use strict";

module.exports = function (app) {
  var func = require("./controller");

  app.route("/").get(func.index).all(func.methodNotAllowedHandler);
  app
    .route("/mahasiswa")
    .get(func.allMahasiswa)
    .all(func.methodNotAllowedHandler);
  app
    .route("/mahasiswa/:id")
    .get(func.getMahasiswa)
    .all(func.methodNotAllowedHandler);
  app
    .route("/create")
    .post(func.createMahasiswa)
    .all(func.methodNotAllowedHandler);
  app
    .route("/update")
    .put(func.updateMahasiswa)
    .all(func.methodNotAllowedHandler);
  app
    .route("/delete/:id")
    .delete(func.deleteMahasiswa)
    .all(func.methodNotAllowedHandler);
  app
    .route("/krsmahasiswa")
    .get(func.krsMahasiswa)
    .all(func.methodNotAllowedHandler);
};
