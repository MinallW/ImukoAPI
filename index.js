const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.slthj.mongodb.net/rutas_medicas?retryWrites=true&w=majority',
		 {useNewUrlParser: true, useUnifiedTopology: true})

const personSchema = new mongoose.Schema({
    schema_version: { type: Number, default: 1 },
    document_version: { type: Number, default: 1 },
    fecha_version: { type: Date, default: Date.now },
    fecha_ultima_modificacion: { type: Date, default: Date.now },
    codigo_interno: { type: String, unique: true, required: true },
    primer_nombre: { type: String, required: true},
    segundo_nombre: { type: String, required: true},
    primer_apellido: { type: String, required: true},
    segundo_apellido: { type: String, required: true},
    identificacion: {
	numero: { type: Number, required: true, unique: true },
	fecha_version: Date,
	lugar_expedicion: String,
	tipo: String
    },
    estado_civil: String,
    sexo: String,
    correo_electrico: {
	correo: { type: String, required: true, unique: true },
	correo1: { type: String, unique: true },
	correo2: { type: String, unique: true }
    },
    fecha_nacimiento: Date
//    core_eps: [{ type: Schema.Types.ObjectId, ref: 'Eps' }]

}), Person = mongoose.model('Person', personSchema)

const epsSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    entidad: { type: String, required: true },
    nit: { type: Number, required: true, unique: true, min: 5, max: 11 },
    regimen_codigo: { type: String, required: true },
    regimen_descripcion: { type: String, required: true}

}), Eps = mongoose.model('Eps', epsSchema)
