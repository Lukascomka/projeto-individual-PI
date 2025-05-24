var express = require("express");
var router = express.Router();

var postarController = require("../controllers/publicacaoController");



router.post("/posts/postar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    postarController.cadastrar(req, res);
});

router.get("/posts/listar", function (req, res) {
    // função a ser quando acessar /carros/listar
    postarController.listar(req, res);
});





module.exports = router;