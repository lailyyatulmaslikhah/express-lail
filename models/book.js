const mongoose = require("mongoose");

//Membuat tabel Book dengan schema
const bookSchema = new mongoose.Schema({
    jdlbuku: String,
    ISBN: String,
    deskripsi: String,
    pengarang: String,
    penerbit: String,
});

//ekspor tabel book
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;