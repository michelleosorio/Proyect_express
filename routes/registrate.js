const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.render('registrate.pug');
});

module.exports = router;