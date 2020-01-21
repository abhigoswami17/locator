const express = require('express');
const router = express.Router();
const contrMain = require('../controller/main');

const homepageController = (req, res) => {
  res.render('index', { title: 'Express' });
}

/* GET home page. */
router.get('/', contrMain.index);

module.exports = router;
