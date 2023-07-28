//membuat data array
// let book = [
//     { id: 1, jdlbuku: "Express Js.1", ISBN: 111},
//     { id: 2, jdlbuku: "Express Js.2", ISBN: 222},
// ]

const { response } = require("express");

//Import tabel Book
const Book = require("../models/book");


module.exports = { //lakukan module export sebuah objek
    // index: function(req,res){
    //     if (book.length >0){ //Tambahkan sintak kondisi jika data buku > 0 maka tampilkan status true dan method yang digunakan  
    //         res.json({
    //             status: true,
    //             data: book,
    //             method: req.method,
    //             url : req.url,
    //             tanggal : new Date,
    //         })
    //     }
    //     else { //Kondisi yang lain, jika data buku kosong maka tampilkan status false dan pesan 
    //         res.json ({
    //             status : false,
    //             massage: 'Data Buku Masih Kosong'
    //         })
    //     }
    // },
    index: async (req, res) => {
        const book = await Book.find({});
        res.json(book);
    },
    // tambah: function(req, res){
    //     book.push(req.body) // kirimkan semua request data body ke dalam daftar book
    //     res.send({ //merubah respon json menjadi bentuk objek
    //     status: true,
    //     data: book,
    //     massage: 'Data Buku Berhasil ditambahkan',
    //     method: req.method,
    //     url : req.url,
    //    tanggal : new Date,
    //     })
    // },

    tambah: async (req, res) => {
        const book = new Book(req.body);
        await book.save();
        res.json(book);
    },

// update: function(req,res){
//     const id = req.params.id
//     book.filter(buku => {
//         if(buku.id == id) {
//             buku.id = id
//             buku.jdlbuku = req.body.jdlbuku
//             buku.ISBN = req.body.ISBN

//             return book;
//         }
//     });
//     res.json({
//         status: true,
//         data: book,
//         massage: 'Data Buku Berhasil di Update',
//         method: req.method,
//          url: req.url,
//          tanggal : new Date,
//     })
// },

update: async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.json(book);
},

// delete:  function(req,res){
//     let id = req.params.id
//     book = book.filter(buku => buku.id != id)
//     // res.send(book);
//     res.send({
//         status: true,
//         data: book,
//         massage: 'Data Buku Berhasil di Hapus',
//         method: req.method,
//          url: req.url,
//          tanggal : new Date,
//     })
// },
delete: async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.json({ message: "Data berhasil dihapus"});
},
 };