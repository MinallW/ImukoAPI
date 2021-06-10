const mongoose = require('mongoose')

const personaSchema = new mongoose.Schema({
    schema_version: { type: Number, default: 1 },
    document_version: { type: Number, default: 1 },
    fecha_version: { type: Date, default: Date.now },
    fecha_ultima_modificacion: { type: Date, default: Date.now },
    codigo_interno: { type: String, unique: true, required: true },
    primer_nombre: { type: String, required: true },
    segundo_nombre: { type: String, required: true },
    primer_apellido: { type: String, required: true },
    segundo_apellido: { type: String, required: true },
    identificacion: {
	numero: { type: Number, unique: true },
	fecha_version: Date,
	lugar_expedicion: String,
	tipo: String
    },
    estado_civil: String,
    sexo: String,
    correo_electrico: {
	correo: { type: String, unique: true },
	correo1: { type: String, unique: true },
	correo2: { type: String, unique: true }
    },
    fecha_nacimiento: Date,
    core_eps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Eps' }]

})

module.exports = mongoose.model('Persona', personaSchema)
