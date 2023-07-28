const mongoose = require("mongoose");

//membuat table book dengan scema
const mahasiswiSchema = new mongoose.Schema({
  image: String,
  nama: String,
  nim: String,
  prodi: String,
  angkatan: String,
});

//ekspor table book
const Mahasiswi = mongoose.model("Mahasiswi", mahasiswiSchema);
module.exports = Mahasiswi;
