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
}

