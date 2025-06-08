var express = require("express");
var router = express.Router();


var homePageController = require('../controllers/homePageController');


router.post("/", function (req, res) {
    homePageController.cadastrar(req, res);
});

router.get("/feed", function (req, res) {
    homePageController.listar(req, res);
});

module.exports = router;