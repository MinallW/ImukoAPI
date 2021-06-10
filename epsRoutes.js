const express = require('express'),
      router = express.Router(),
      epsModel= require('./epsSchema.js')

router.get('/', (req, res) => {
    epsModel.find({}, (request, response) => {
	res.json(response)
    })
})

router.post('/', (req, res) => {
    const eps = new epsModel()
    eps.codigo = req.body.codigo
    eps.entidad = req.body.entidad
    eps.nit = req.body.nit
    eps.regimen_codigo = req.body.regimen_codigo
    eps.regimen_descripcion = req.body.regimen_descripcion

    eps.save((request, response) => {
	res.json(response)
    })
})


router.get('/:objId', (req, res) => {
    epsModel.findById(req.params.objId, (request, response) => {
	res.json(response)
    })
})

// Returns the object that was changed

router.put('/:objId', (req, res) => {
    epsModel.findByIdAndUpdate(req.params.objId, {

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
    epsModel.findByIdAndRemove(req.params.objId, (request, response) => {
	res.json(response)
    })
})

module.exports = router
