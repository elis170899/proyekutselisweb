var express = require('express');
var auth = require('./auth');
var con = require('../controller');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftarkan menu registrasi
router.post('/user/register', auth.registrasi);
router.post('/user/login', auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);
router.get('/api/v1/rahasia1', verifikasi(), auth.halamanrahasia1);

//Pelanggan
router.post('/user/pelanggan/input/servis', verifikasi(), con.tambahservis);

//Admin
router.post('/user/admin/input/montir', verifikasi(), con.tambahmontir);
router.post('/user/admin/input/sparepart', verifikasi(), con.tambahsparepart);
router.post('/user/admin/input/user', verifikasi(), con.tambahuser);
router.post('/user/admin/input/level', verifikasi(), con.tambahlevel);
router.post('/user/admin/input/servis', verifikasi(), con.tambahservis);


router.put('/user/admin/ubah/montir', verifikasi(), con.ubahmontir);
router.put('/user/admin/ubah/sparepart', verifikasi(), con.ubahsparepart);
router.put('/user/admin/ubah/user', verifikasi(), con.ubahuser);
router.put('/user/admin/ubah/level', verifikasi(), con.ubahlevel);
router.put('/user/admin/ubah/servis', verifikasi(), con.ubahservis);

router.delete('/user/admin/hapus/montir', verifikasi(), con.hapusmontir);
router.delete('/user/admin/hapus/sparepart', verifikasi(), con.hapussparepart);
router.delete('/user/admin/hapus/user', verifikasi(), con.hapususer);
router.delete('/user/admin/hapus/level', verifikasi(), con.hapuslevel);
router.delete('/user/admin/hapus/servis', verifikasi(), con.hapusservis);

//hitung
router.get('/tampil/totalservis',verifikasi(), auth.totalservis);

module.exports = router;