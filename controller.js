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
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
    [ nama_montir, harga_perjam],
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

//menginput data di tabel user
exports.tambahuser = function(req,res){
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;

    connection.query('INSERT INTO t_user (nama_user,email, password, level) VALUES(?,?,?,?)',
    [nama_user, email, password, level],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data User!",res)
        }
    });
};

//menginput data di tabel level
exports.tambahlevel = function(req,res){
    var nama_level = req.body.nama_level;

    connection.query('INSERT INTO t_level (nama_level) VALUES(?)',
    [nama_level],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data Level!",res)
        }
    });
};

//mengubah data montir berdasarkan id
exports.ubahmontir = function(req,res){
    var id = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=? ', [nama_montir,harga_perjam,id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah Data Montir", res)
            }
        });
};

//mengubah data sparepart berdasarkan id
exports.ubahsparepart = function(req,res){
    var id = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=? ', [nama_sparepart, harga_sparepart, satuan, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah Data Sparepart", res)
            }
        });
};

//mengubah data user berdasarkan id
exports.ubahuser = function(req,res){
    var id = req.body.id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password= req.body.password;
    var level = req.body.level;

    connection.query('UPDATE t_user SET nama_user=?, email=?, password=?, level=? WHERE id_user=? ', 
    [nama_user, email, password, level, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah Data User", res)
            }
        });
};

//mengubah data level berdasarkan id
exports.ubahlevel = function(req,res){
    var id = req.body.id_level;
    var nama_level = req.body.nama_level;

    connection.query('UPDATE t_level SET nama_level=? WHERE id_level=? ', 
    [nama_level, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah Data Level", res)
            }
        });
};

//mengubah data servis berdasarkan id
exports.ubahservis = function(req,res){
    var id = req.body.id_servis;
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('UPDATE t_servis SET tgl_servis=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=? WHERE id_servis=? ', 
    [tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah Data Servis", res)
            }
        });
};

//Menghapus data montir berdasarkan id
exports.hapusmontir = function(req,res){
    var id = req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Hapus Data Montir!", res)
        }
    });
}

//Menghapus data sparepart berdasarkan id
exports.hapussparepart = function(req,res){
    var id = req.body.id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Hapus Data Sparepart!", res)
        }
    });
}

//Menghapus data user berdasarkan id
exports.hapususer = function(req,res){
    var id = req.body.id_user;
    connection.query('DELETE FROM t_user WHERE id_user=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Hapus Data User!", res)
        }
    });
}