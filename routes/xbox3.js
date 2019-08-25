const express = require('express');
const router = express.Router();

//routes
router.get('/xbox3', (req, res) => {
    res.render('xbox3.pug');
});

module.exports = router;