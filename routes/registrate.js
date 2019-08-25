const express = require('express');
const router = express.Router();

//routes
router.get('/registrate', (req, res) => {
    res.render('registrate.pug');
});

module.exports = router;