const mongoose = require('mongoose')

const epsSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    entidad: { type: String, required: true },
    nit: { type: Number },
    regimen_codigo: { type: String, required: true },
    regimen_descripcion: { type: String, required: true}

})

module.exports = mongoose.model('Eps', epsSchema)
