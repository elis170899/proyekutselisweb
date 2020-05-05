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
