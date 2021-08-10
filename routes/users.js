var express = require("express");
var router = express.Router();
var loginValidator = reuqire("../middleware");

/* GET users listing. */
router.get("/", loginValidator, function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
