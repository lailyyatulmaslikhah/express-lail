const express = require("express");
//const res = require("express/lib/response");
const router = express.Router();
const mahasiswicontroller = require("../controllers/mahasiswi");

router
  .route("/api/mahasiswi")
  .get(mahasiswicontroller.index)
  .post(mahasiswicontroller.tambah);

router.put("/api/mahasiswi/:id", mahasiswicontroller.update);

router.delete("/api/mahasiswi/:id", mahasiswicontroller.delete);
module.exports = router;
