const express = require('express');
const router = express.Router();

//routes
router.get('/administrador', (req, res) => {
    res.render('administrador.pug');
});

module.exports = router;