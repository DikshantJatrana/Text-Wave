var express = require("express");
var router = express.Router();

/* GET users listing. */
router.use((req, res, next) => {
  res.status(404).render("error");
});

module.exports = router;
