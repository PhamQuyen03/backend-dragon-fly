var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  try {
    res.send({ name: "quyen", age: 22 });
  } catch (error) {
    res.status(404).send('sorry something wrong');
  }
});

module.exports = router;
