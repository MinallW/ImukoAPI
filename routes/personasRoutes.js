const express = require('express'),
      router = express.Router(),
      personasController = require('../controllers/personasController')

router.get('/', personasController.getPersonas)

router.post('/', personasController.createPersona)


router.get('/:objId', personasController.getPersona)

// Returns the object that was changed

router.put('/:objId', personasController.updatePersona)

// Returns the deleted object

router.delete('/:objId', personasController.deletePersona)

module.exports = router
