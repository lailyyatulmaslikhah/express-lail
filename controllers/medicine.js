//membuat data array
let medicine = [
    { id: 1, namaobat: "Amoxcilin", harga: 50000},
    { id: 2, namaobat: "Paracetamol", harga: 100000},
]
module.exports = { //lakukan module export sebuah objek
    index: function(req,res){
        if (medicine.length >0){ //Tambahkan sintak kondisi jika data obat > 0 maka tampilkan status true dan method yang digunakan  
            res.json({
                status: true,
                data: medicine,
                method: req.method,
                url : req.url,
            })
        }
        else { //Kondisi yang lain, jika data obat kosong maka tampilkan status false dan pesan 
            res.json ({
                status : false,
                massage: 'Data Obat Masih Kosong'
            })
        }
    },
    tambah: function(req, res){
        medicine.push(req.body) // kirimkan semua request data body ke dalam daftar medicine
        res.send({ //merubah respon json menjadi bentuk objek
        status: true,
        data: medicine,
        massage: 'Data Obat Berhasil ditambahkan',
        method: req.method,
        url : req.url,
        })
    },
update: function(req,res){
    const id = req.params.id
    medicine.filter(obat => {
        if(obat.id == id) {
            obat.id = id
            obat.namaobat = req.body.namaobat
            obat.harga = req.body.harga

            return medicine;
        }
    });
    res.json({
        status: true,
        data: medicine,
        massage: 'Data Obat Berhasil di Update',
        method: req.method,
         url: req.url,
    })
},
delete:  function(req,res){
    let id = req.params.id
    medicine = medicine.filter(obat => obat.id != id)
    // res.send(medicine);
    res.send({
        status: true,
        data: medicine,
        massage: 'Data Obat Berhasil di Hapus',
        method: req.method,
         url: req.url,
    })
},
}