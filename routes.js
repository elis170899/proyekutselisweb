'use strict';

module.exports = function(app){
    var jsonku = require('./controller')

    app.route('/')
    .get(jsonku.index);

    app.route('/tampilsparepart/:id')
    .get(jsonku.tampilsparepartberdasarkanid);

    app.route('/tampilmontir/:id')
    .get(jsonku.tampilmontirberdasarkanid);

    app.route('/tampilsparepart')
    .get(jsonku.tampilsemuadatasparepart);

    app.route('/tampilmontir')
    .get(jsonku.tampilsemuadatamontir);

    app.route('/tambahservis')
    .post(jsonku.tambahservis);

    app.route('/tambahmontir')
    .post(jsonku.tambahmontir);

    app.route('/tambahsparepart')
    .post(jsonku.tambahsparepart);

    app.route('/tambahuser')
    .post(jsonku.tambahuser);

    app.route('/tambahlevel')
    .post(jsonku.tambahlevel);

    app.route('/ubahmontir')
    .put(jsonku.ubahmontir)

    app.route('/ubahsparepart')
    .put(jsonku.ubahsparepart)

    app.route('/ubahuser')
    .put(jsonku.ubahuser)

    app.route('/ubahlevel')
    .put(jsonku.ubahlevel)

    app.route('/ubahservis')
    .put(jsonku.ubahservis)

    app.route('/hapusmontir')
    .delete(jsonku.hapusmontir)

    app.route('/hapussparepart')
    .delete(jsonku.hapussparepart)

    app.route('/hapususer')
    .delete(jsonku.hapususer)

    app.route('/hapuslevel')
    .delete(jsonku.hapuslevel)

    app.route('/hapusservis')
    .delete(jsonku.hapusservis)
}

