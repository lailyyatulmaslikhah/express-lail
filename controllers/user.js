const { response } = require("express");
const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  //daftar user baru
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      //enskripsi password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "User berhasil terdaftar" });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat registrasi" });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        res.status(404).json({ message: "User tidak ditemukan!" });
        return;
      }
      //membandingkan password yang diinput dengan password yang tersimpan
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.status(401).json({ message: "Password salah" });
        return;
      }
      //membuat token jwt untuk autentikasi
      const token = jwt.sign({ userId: user._id }, "rahasia", {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat proses login" });
    }
  },

  index: async (req, res) => {
    const user = await User.find({});
    res.json(user);
},

tambah: async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
},

update: async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(user);
},

delete: async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "Data berhasil dihapus"});
},

};


// exports.DaftarUser = async (req,res) => {
//     const {username, password } = req.body

//     const hashPassword = await bcryptjs.hash(password, 10)
//     const user = new User ({
//         username: username,
//         password: hashPassword
//     })

//     user.save()

//     return res.status(201).json[{
//         message: "User berhasil di daftarkan",
//     }]
// }
// const register = (req, res, next) => {
//     bcryptjs.hash(req.body.password, 10, function(err, hashedPass) {
//         if(err) {
//             res.json({
//                 error:err
//             })
//         }
//         let user = new User ({ 
//             username: req.body,
//             password: hashedPass
//         })
//         user.save()
//         .then(user => {
//             res.json({
//                 message: 'User berhasil ditambahkan!'
//             })
//         })
//         .catch(error => {
//             res.json({
//                 message: 'An error occured!'
//             })
//         })
//     })
// }

// const login = (req, res, next) => {
//     var username = req.body.username
//     var password = req.body.password

//     User.findOne({ username })
//     .then(user => {
//         if(user){
//             bcryptjs.compare(password, user.password, function(err, result) {
//                 if(err) {
//                     res.json({
//                         error: err
//                     })
//                 }
//                 if(result){
//                     let token = jwt.sign({ userId: user._id }, 'verysecretValue', {expiresIn: '1h'})
//                     res.json({
//                         message: 'Login Succesfull!',
//                         token
//                     })
//                 } else {
//                     res.json({
//                         message: 'Password does not matched!'
//                     })
//                 }
//             })

//         } else {
//             res.json({
//                 message: 'tidak ada user yanf ditemukan!'
//             })
//         }
//     })
// }

// module.exports = {
//     register
// }
