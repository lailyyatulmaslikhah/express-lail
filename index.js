const express =require('express');
const bookRouter = require('./router/book'); //import file book
const userRouter = require('./router/user');
const mahasiswaRouter = require('./router/mahasiswa');
const mahasiswiRouter = require('./router/mahasiswi'); //import file book
const multer  = require('multer');
const path = require("path");
const bodyParser = require('body-parser');
//const medicineRouter = require('./router/medicine') 
//import library CORS
const cors = require('cors');
const app = express()


const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// app.get('/', function(req,res){
//     res.send('sp52 belajar express js')
// })

// app.use(bookRouter) //tambahkan app.use nama const

//Aktifkan /tambahkan setting default  untuk req.body
app.use(express.json()); //For parsing application json
app.use(express.urlencoded({ extended: true })) //for parsing application/x-www-form-urlenconded
app.use("/image", express.static("image"));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use(bodyParser.urlencoded({ extended: true })) //for parsing application/x-www-form-urlenconded
app.use(bodyParser.json()); //For parsing application json

app.use(express.static(path.join(__dirname, "public")));
//use cors Gunakan middleware CORS sebelum menangani rute atau endpoint lainnya.
app.use(cors());
app.use('/api', userRouter)

//Routing sederhana pada express
// app.get('/', function(request,respon){
//     respon.send('Hello! ! Mahasiswa STIKOM PGRI Banyuwangi')
// })

// //membuat URL /about
// app.get('/about', function(request,respon){
//     respon.send('About! ! Mahasiswa Semester 5')
// })

//method post untuk create atau mengirimkan ke server untuk disimpan di database
// app.post('/user', function(request,respon){
//     respon.send('post!! Tambahkan Mahasiswa Semester 5')
// }) 

//method put mengirim data ke server dengan id yg spesifik utk tujuan update database
// app.put('/user', function(request,respon){
//     respon.send('put!! Update data Mahasiswa Semester 5')
// })
//contoh method put dengan
// app.put('/user/:id/:book/:idbook', function(request,respon){
//     respon.send(request.params)
// })

//method delete menghapus data berdasarkan id tertentu
// app.delete('/user', function(request,respon){
//     respon.send('delete!! Mahasiswa Semester 5 dari database')
// })

//Method respon json
//Menampilkan data json pada halaman sp52
// app.get('/sp52', function(request, respon){
//     const sp52 = {
//         NIM  : 0001,
//         NAMA : 'Budiman'
//     }
//     respon.json(sp52)
// })

// //Method respon redirect
// //ketika klien mengakses halaman URL /about maka akan diarahkan ke halaman expressjs.com
// app.get ('/about', function (req,res){
//     res.redirect('https://expressjs.com/en/4x/api.html#res.redirect')
// })  

// //Mengirimkan pesan Not Found ketika mengakses halaman about1
// app.get('/about1', function(req,res){
//     res.sendStatus(404)
// })
// app.route('/book')
// .get(function(req,res){
//     res.send('Tampilkan Buku') //Menampilkan data di browser
// })
// .post(function(req,res){
//     res.send('Tambahkan Buku') //Menambahkan data buku di database
// })
// .put(function(req,res){
//     res.send('Update data buku') //update data buku di database
// })
// .delete(function(req,res){
//     res.send('Delete data buku') //delete data buku di database
// })
//Membuat koneksi dengan database menggunakan MYSQL
//const connection = require("./database");

//Membuat koneksi dengan database menggunakan mongoose
const mongoose = require("mongoose");

mongoose
.connect("mongodb://127.0.0.1:27017/lail_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});


// const storage = multer.diskStorage({
//      // konfigurasi folder penyimpanan file
//      destination: function (req, file, cb) {
//         cb(null, "public/uploads");
//       },
//       // konfigurasi penamaan file yang unik
//       filename: function (req, file, cb) {
//         cb(
//           null,
//           path.parse(file.originalname).name + "-" +
//          Date.now() + path.extname(file.originalname)
//         );
//       },
// })

// const upload = multer({ storage })

app.get("/", function (req, res) {
    res.send("Hello");
});
// app.post("/api/mahasiswa", upload.single('photo'),(req,res)=> {
//     //membuat url gambar
//     //save ke db
//     let finalFotoURL = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
//     res.json({status: "success", foto: finalFotoURL })
// });
 
// var myLogger = function (req, res, next) {
//     console.log("LOGGED"); //pesan ini akan ditampilkan di terminal saat aplikasinya dilewati
//     next();
// };

// app.use(myLogger); //cara express js untuk mengaktifkan atau memasang middleware
                    // sebelum dilanjutkan ke function selanjutnya
                    //pasang middleware sebelum jalur route aplikasinya dijalankan
// app.get("/", function (request, respon) { //function ini akan dijalankan ketika berhasil melewati middleware
//     respon.send("Selamat Belajar Express js");
// });
            
//app.use(bookRouter); //tambahkan app.use nama cons
//app.use(medicineRouter);
 //app.listen(3000, function(){
 //console.log('server berjalan lancar')
//});

// const requesTime = function (req, res, next){
//     date = new Date(); //pesan yang ingin ditampilkan
//     console.log(date);
//     next(); 
// };

// app.use(requesTime); //nama properti middleware bebas

// app.get("/time", function (request, respon) {
//     const tanggal ="Selamat Belajar Express js</br>" +
//     "<p><strong> Request at: " + date + "</strong></p>"; //properti pesan dari middleware yang akan ditampilkan
//     respon.send(tanggal); 
// });
app.use(userRouter);
app.use(bookRouter); //tambahkan app.use nama cons
app.use(mahasiswaRouter); //tambahkan app.use nama cons
app.use(mahasiswiRouter);
//materi bcyrpt user router untuk token register
// app.use(validateIndex)
app.use(express.json())
// //app.use(medicineRouter);
  app.listen(5000, function(){
     console.log('server berjalan lancar')
 });
