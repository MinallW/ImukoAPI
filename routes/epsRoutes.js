const express = require('express'),
      router = express.Router(),
      epsController = require('../controllers/epsController')

router.get('/', epsController.getAllEPS)

router.post('/', epsController.createEPS)


router.get('/:objId', epsController.getEPS)

// Returns the object that was changed

router.put('/:objId', epsController.updateEPS)

// Returns the deleted object

router.delete('/:objId', epsController.deleteEPS)

module.exports = router
