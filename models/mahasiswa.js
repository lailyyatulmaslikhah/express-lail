const mongoose = require("mongoose");

//Membuat tabel Book dengan schema
const mahasiswaSchema = new mongoose.Schema({
    nama: String,
    nim: String,
    prodi: String,
    angkatan: String,
    foto: String,
});

//ekspor tabel mahasiswa
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);
module.exports = Mahasiswa;
