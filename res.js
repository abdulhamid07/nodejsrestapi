"use strict";

//fungsi ok untuk return json
exports.data = function (status, message, values = [], res) {
  var data = {
    status: status,
    message: message,
    values: values,
  };

  res.json(data);
  res.end();
};

// respon tipe request nested loop
exports.datanested = function (status, message, values = [], res) {
  //akumulasikan data
  const hasil = values.reduce((akumulasikan, item) => {
    //tentukan key group
    if (akumulasikan[item.nama]) {
      const group = akumulasikan[item.nama];
      //cek jika isi array ada matakuliah
      if (Array.isArray(group.matakuliah)) {
        //tambahkan kedalam group dengan nama mhs yg sama
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
      // console.log(group);
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});

  var data = {
    status: status,
    message: message,
    values: hasil,
  };

  res.json(data);
  res.end();
};
