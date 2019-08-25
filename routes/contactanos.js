const express = require('express');
const router = express.Router();

//routes
router.get('/contactanos', (req, res) => {
    res.render('contactanos.pug');
});

module.exports = router;