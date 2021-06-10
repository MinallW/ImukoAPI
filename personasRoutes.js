const express = require('express'),
      router = express.Router(),
      personasModel= require('./personasSchema.js')

router.get('/', (req, res) => {
    personasModel.find({}, (request, response) => {
	res.json(response)
    })
})

router.post('/', (req, res) => {
    const persona = new personasModel()
    persona.codigo_interno = req.body.codigo_interno
    persona.primer_nombre = req.body.primer_nombre
    persona.segundo_nombre = req.body.segundo_nombre
    persona.primer_apellido = req.body.primer_apellido
    persona.segundo_apellido = req.body.segundo_apellido
    persona.identificacion = req.body.identificacion
    persona.estado_civil = req.body.estado_civil
    persona.sexo = req.body.sexo
    persona.correo_electronico = req.body.correo_electronico
    persona.fecha_nacimiento = req.body.fecha_nacimiento
    persona.core_eps = req.body.core_eps

    persona.save(function (err) {
	if (err) return res.send(err)
	else {res.send('Successfully saved!')}
    })
})


router.get('/:objId', (req, res) => {
    personasModel.findById(req.params.objId, (request, response) => {
	res.json(response)
    })
})

// Returns the object that was changed

router.put('/:objId', (req, res) => {
    personasModel.findByIdAndUpdate(req.params.objId, {

	codigo: req.body.codigo,
	entidad: req.body.entidad,
	nit: req.body.nit,
	regimen_codigo: req.body.regimen_codigo,
	regimen_descripcion: req.body.regimen_descripcion

    }, (request, response) => {
	res.json(response)
    })

})

// Returns the deleted object

router.delete('/:objId', (req, res) => {
    personasModel.findByIdAndRemove(req.params.objId, (request, response) => {
	res.json(response)
    })
})

module.exports = router
