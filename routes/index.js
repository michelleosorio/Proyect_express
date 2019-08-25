const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.render('index.pug');
});

module.exports = router;