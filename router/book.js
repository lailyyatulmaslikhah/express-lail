const express=require('express') //import (require) module express lalu simpan di const express
const router = express.Router() //instance object express untuk menjalankan route secara modular
const bookcontroller = require('../controllers/book') //import data dari file book.js di folder controller 



//router
 //router.route ("/book") //sintak .app ganti dengan sintak router
//  .get(function(req,res){
//     if (book.length >0){ //Tambahkan sintak kodisi jika data buku >0 maka tampilkan status true dan method yang digunakan 
//         res.json({
    // .get(bookcontroller.index)
    // .post(bookcontroller.tambah)
    // .post(function(request, response){
    //     book.push(req.body)
    //     response.send({
    //         status: true,
    //         data: book,
    //         method: req. method,
    //             url: req.url
    //     })
    // })
           
// }
//     else{ //kondisi yang lain, jika data buku kosong maka tampilkan status false dan pesan 
//         res.json({
//             status: false,
//             Massage: 'Data Buku Masih Kosong'
//         })
//     }
//     //res.json(book); //membaca data book yg sudah dibuat
//  })

// .post(function (req,res){
//     book.push(req.body); //kirimkan samua request data body kedalam daftar book
//     res.send({
//      //merubah respon json menjadi bentuk objek  
//         status: true,
//         data: book,
//         massage: 'Data Buku Berhasil ditambahkan',
//         method: req.method,
//          url: req.url,
//     });
// });
// router.route ('/book') //sintak .app ganti dengan sintak router
// .get(function(req,res){
//     res.send('Tampilkan Buku') //menampilkan data di browser
// })
// .post(function(req,res){
//     //console.log(req.body); //data akan ditampilkan di layar terminal
//   // res.send('Tambahkan data Buku') //tambahkan data buku di database
//     book.push(req.body); //kirimkan semua request data body ke dalam daftar book menampilkan di browser
//     res.send(req.body); //menampilkan di browser
//     //res.send(book); //menampilkan di browser
// });
//update data
// router.put('/book/:id', function(req,res){
//     res.send(req.params.id) //update data buku di database
// })
//router.put('/book/:id', bookcontroller.update)
// router.delete('/book/:id', function(req,res){
//     const id = req.params.id
//     res.send(id);
//  });
//DELETE
//router.delete('/book/:id', bookcontroller.delete)

router.route("/api/book").get(bookcontroller.index).post(bookcontroller.tambah);

//UPDATE DATA
router.put("/api/book/:id", bookcontroller.update);

//DELETE DATA
router.delete("/api/book/:id", bookcontroller.delete);

module.exports = router; //Modul ini sudah di isi dengan route khusus untuk ( URL:/BOOK),
                        //dan sudah bisa kita exports

