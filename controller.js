'use strict'

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi Bengkelku Berjalan!",res)
};

//menampilkan semua data sparepart berdasarkan id
exports.tampilsparepartberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        }); 
};

//menampilkan semua data montir berdasarkan id
exports.tampilmontirberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        }); 
};

//menampilkan semua data sparepart
exports.tampilsemuadatasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data montir
exports.tampilsemuadatamontir= function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menginput data di tabel servis
exports.tambahservis = function(req,res){
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('INSERT INTO t_servis (tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart) VALUES(?,?,?,?,?)',
    [tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

//menginput data di tabel montir
exports.tambahmontir = function(req,res){
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (id_montir,nama_montir,harga_perjam) VALUES(?,?,?)',
    [id_montir, nama_montir, harga_perjam],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data Montir!",res)
        }
    });
};

//menginput data di tabel sparepart
exports.tambahsparepart = function(req,res){
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart, satuan) VALUES(?,?,?)',
    [nama_sparepart, harga_sparepart, satuan],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data Sparepart!",res)
        }
    });
};