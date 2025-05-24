var express = require("express");
var router = express.Router();

var mainController = require("../controllers/mainController");



router.post("/", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    mainController.cadastrar(req, res);
});

router.get("/", function (req, res) {
    // função a ser quando acessar /carros/listar
    mainController.listar(req, res);
});




module.exports = router;