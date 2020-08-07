var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const con = mysql.createConnection({
  host: '172.23.0.3',
  user: 'root',
  password: 'password'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
  });
});

module.exports = router;
