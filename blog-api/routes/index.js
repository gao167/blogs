var express = require('express');
var router = express.Router();

const data = [
  {id: 1, name: 'Blog 1'},
  {id: 2, name: 'Blog 2'},
  {id: 3, name: 'Blog 3'},
  {id: 4, name: 'Blog 4'},
  {id: 5, name: 'Blog 5'},
  {id: 6, name: 'Blog 6'},
  {id: 7, name: 'Blog 7'},
  {id: 8, name: 'Blog 8'},
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    data
  })
});

module.exports = router;
