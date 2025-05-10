var express = require("express");
var router = express.Router();

var usuarioController = require("/home/lukascomka/Área de trabalho/site_projeto_individual/projeto-individual-PI/src/controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;


// basicamente o html faz o papel da view do backend, o routes pega essas informações e traça as rotas agora, como mandar para controleller
