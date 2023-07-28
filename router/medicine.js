const express=require('express') //import (require) module express lalu simpan di const express
const router = express.Router() //instance object express untuk menjalankan route secara modular
const medicinecontroller = require('../controllers/medicine') //import data dari file medicine.js di folder controller 



//router
 router.route ("/medicine") //sintak .app ganti dengan sintak router
    .get(medicinecontroller.index)
    .post(medicinecontroller.tambah)
    //UPDATE
router.put('/medicine/:id', medicinecontroller.update)
//DELETE
router.delete('/medicine/:id', medicinecontroller.delete)
module.exports = router; //Modul ini sudah di isi dengan route khusus untuk ( URL:/medicine),
                        //dan sudah bisa kita exports