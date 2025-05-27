var express = require("express");
var router = express.Router();

var mainController = require("../controllers/mainController");



router.post("/", function (req, res) {
    mainController.cadastrar(req, res);
});

router.post('/quiz', function(req, res){
    mainController.cadastrarQuiz(req, res);
});

router.get("/feed", function (req, res) {
    mainController.listar(req, res);
});

router.get("/obterDadosPizza", function (req, res){
    mainController.GraficodePizza(req, res);
});

router.get('/obterDados', function (req, res){
    mainController.GraficodeBarra(req, res);
});




module.exports = router;