const express = require('express');
const router = express.Router();

//routes
router.get('/usuario', (req, res) => {
    res.render('usuario.pug');
});

module.exports = router;