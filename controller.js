"use strict";

var response = require("./res");
var connection = require("./connection");

exports.index = function (req, res) {
  response.data(200, "Application now is running", [], res);
};

// menampilkan semua data mahasiswa
exports.allMahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.data(200, "OK", rows, res);
    }
  });
};

exports.getMahasiswa = function (req, res) {
  let id = req.params.id;

  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        if (!rows.length) {
          response.data(404, "Data Not Found", [], res);
        } else {
          response.data(200, "OK", rows, res);
        }
      }
    }
  );
};

// tambah data mahasiswa
exports.createMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  connection.query("SELECT * FROM mahasiswa WHERE nim=?", [nim], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length) {
        response.data(200, "Failed Create Data. NIM Already Exists", rows, res);
      } else {
        connection.query(
          "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?, ?, ?)",
          [nim, nama, jurusan],
          function (error, rows, fields) {
            if (error) {
              console.log(error);
            } else {
              response.data(201, "Data has been created", [], res);
            }
          }
        );
      }
    }
  });
};

// Update data mahasiswa
exports.updateMahasiswa = function (req, res) {
  var id_mahasiswa = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa=?",
    [id_mahasiswa],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        if (!rows.length) {
          response.data(404, "Failed Update Data. ID Not Found", rows, res);
        } else {
          connection.query(
            "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?",
            [nim, nama, jurusan, id_mahasiswa],
            function (error, rows, fields) {
              if (error) {
                console.log(error);
              } else {
                response.data(200, "Data was updated", [], res);
              }
            }
          );
        }
      }
    }
  );
};
exports.deleteMahasiswa = function (req, res) {
  let id = req.params.id;
  let dataMhs = [];
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        if (!rows.length) {
          response.data(404, "Data Not Found", [], res);
        } else {
          dataMhs = rows;
          connection.query(
            "DELETE FROM mahasiswa WHERE id_mahasiswa=?",
            [id],
            function (error, rows, fields) {
              if (error) {
                console.log(error);
              } else {
                response.data(200, "Data was deleted", dataMhs, res);
              }
            }
          );
        }
      }
    }
  );
};
exports.krsMahasiswa = function (req, res) {
  connection.query(
    "SELECT m.id_mahasiswa, m.nim, m.nama, m.jurusan, mk.matakuliah, mk.sks FROM krs as k JOIN matakuliah as mk ON mk.id_matakuliah=k.id_matakuliah JOIN mahasiswa as m ON m.id_mahasiswa=k.id_mahasiswa",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.datanested(200, "OK", rows, res);
      }
    }
  );
};
exports.methodNotAllowedHandler = function (req, res) {
  response.data(405, "Method Not Allowed", [], res);
};
