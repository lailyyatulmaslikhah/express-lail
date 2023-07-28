const express = require('express');
const router = express.Router(); //instance object express untuk menjalankan router secara modular
const usercontroller = require('../controllers/user');

router.route("/api/user").post(usercontroller.login).get(usercontroller.login);
router.post("/api/user/daftar", usercontroller.register);

//UPDATE DATA
router.put("/api/user/:id", usercontroller.update);

//DELETE DATA
router.delete("/api/user/:id", usercontroller.delete);
// router.post('/register', usercontroller.register)
// router.post('/login', usercontroller.register)

 module.exports = router;
