const { Router } = require('express');
const { getCodeHandler, findCodeHandler } = require('../controllers/code.controller.js');

const router = Router();

router.post('/getcode', getCodeHandler);
router.post('/findcode', findCodeHandler);

module.exports = router;
