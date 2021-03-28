const express = require('express');
const router = express.Router();

router.use(require('./todo.routes'));


module.exports = router;