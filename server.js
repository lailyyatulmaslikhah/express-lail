const express = require('express')
const app = express()
// dependency multer
// const multer = require("multer");
//untuk menambahkan path
const path = require("path");

// menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
    // konfigurasi folder penyimpanan file
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "public/uploads"));
    },
    // konfigurasi penamaan file yang unik
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

const mahasiswas = [
    {
    nama: 'lailyyatul m',
    nim: '1122777',
    prodi: 'teknik informatika',
    angkatan: '2022',
    foto: '1'
    },
    {
    nama: 'maslikhah',
    nim: '1255',
    prodi: 'Teknik Informatika',
    angkatan: '2022',
    foto: 'C:\fakepaath\WhatshApp Image 2023-02-20 at 19.32.23.jpeg'
    },
    {
        nama: 'hadeeqa',
        nim: '1225256',
        prodi: 'teknik informatika',
        angkatan: '2022',
        foto: '1'
        }
]
function validateIndex(req, res, next) {
    if (req.query.index !== undefined && mahasiswas[req.query.index] === undefined) {
        res.send({ succes: false})
    } else {
        next()
    }
}
app.use(validateIndex)
app.use(express.json())

app.get('/mahasiswa', function (req, res) {
    res.send(mahasiswa)
})

app.post('/mahasiswa', function (req, res) {
    mahasiswas[req.query.index] = { nama: req.body.nama, nim: req.body.nim, prodi: req.body.prodi, angkatan: req.body.angkatan, foto: req.body.foto }
    res.send({ success: true })
})

//menerapkan middleware validateIndex pada rute penghapusan data 
app.delete('/mahasiswa', function (req, res) {
    mahasiswas.splice(req.query.index, 1)
    res.send({ success: true })
})

// menerapkan middleware multer hanya pada rute berikut
app.put(
    "/mahasiwa/upload",
    multer({ storage: diskStorage }).single("foto"),
    (req, res) => {
      const file = req.file.path;
      console.log(file);
      if (!file) {
        res.status(400).send({
          status: false,
          data: "No File is selected.",
        });
      }
      // menyimpan lokasi upload data contacts pada index yang diinginkan
      contacts[req.query.index].foto = req.file.path;
      res.send(file);
    }
  );

app.listen(5000, function(){
    console.log('server berjalan lancar')
});