const express = require('express');
const router = express.Router();

//routes
router.get('/xbox1', (req, res) => {
    res.render('xbox1.pug');
});

module.exports = router;