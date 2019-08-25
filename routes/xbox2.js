const express = require('express');
const router = express.Router();

//routes
router.get('/xbox2', (req, res) => {
    res.render('xbox2.pug');
});

module.exports = router;