const Mahasiswi = require("../models/Mahasiswi");

module.exports = {
  index: async (req, res) => {
    try {
      const mahasiswis = await Mahasiswi.find({});
      res.json(mahasiswis);
    } catch (error) {
      console.error("Error retrieving mahasiswis:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  tambah: async (req, res) => {
    try {
      const { nama, nim, prodi, angkatan } = req.body;
      const image = req.file ? req.file.path : null;
      const newMahasiswi = new Mahasiswi({
        image,
        nama,
        nim,
        prodi,
        angkatan,
      });
      await newMahasiswi.save();
      res.status(201).json({
        message: "Mahasiswi Berhasil Ditambahkan",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Data Gagal Dibuat",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedMahasiswi = await Mahasiswi.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedMahasiswi);
    } catch (error) {
      console.error("Error updating Mahasiswi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await Mahasiswi.findByIdAndDelete(id);
      res.json({ message: "Data berhasil dihapus" });
    } catch (error) {
      console.error("Error deleting Makanan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
