var express = require('express');

const pool = require('../db');
var loginValidator = require('../middleware');

var router = express.Router();

/* GET users listing. */
router.get('/', loginValidator, function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', loginValidator, function (req, res) {
  const { name, password } = req.body;

  const query = {
    text: 'SELECT username, password FROM person WHERE (username = $1) AND (password = $2)',
    values: [name, password],
  };

  pool
    .query(query)
    .then((queryRes) => {
      const { rows } = queryRes;

      if (rows.length === 0) {
        res.status(401).json({ errors: ['No user found'] });
      } else {
        res.cookie('name', rows[0].username, { httpOnly: true });
        res.status(200).json({ name: rows[0].username });
      }
    })
    .catch((errors) => {
      res.status(400).json({ errors: [errors] });
    });
});

module.exports = router;
