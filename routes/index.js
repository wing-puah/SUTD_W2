var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.render('home', { title: 'Express' });
});

const getAppCookies = (req) => {
  // We extract the raw cookies from the request headers
  const rawCookies = req.headers.cookie.split('; ');
  // rawCookies = ['myapp=secretcookie, 'analytics_cookie=beacon;']

  const parsedCookies = {};
  rawCookies.forEach((rawCookie) => {
    const parsedCookie = rawCookie.split('=');
    // parsedCookie = ['myapp', 'secretcookie'], ['analytics_cookie', 'beacon']
    parsedCookies[parsedCookie[0]] = parsedCookie[1];
  });
  return parsedCookies;
};

router.get('/welcome', function (req, res, next) {
  const cookie = getAppCookies(req);

  if (!cookie.name) {
    throw new Error('Unknown user');
  } else {
    return res.render('user', { name: cookie.name });
  }
});

module.exports = router;
