var mainModel = require("../models/mainModel");

function listar(req, res) {
    mainModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var conteudo_publicacao = req.body.conteudo;
    var dataPublicacao = req.body.dataPublicacao;
    console.log("Data recebida do frontend:", dataPublicacao);

    if (conteudo_publicacao == undefined) {
        res.status(400).send("Você não inseriu nada para ser postado");
    } else {
        mainModel.cadastrar(conteudo_publicacao, dataPublicacao)
            .then(function () {
                res.status(201).send("Parabéns por seu post!");
            })
            .catch(function (erro) {
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    listar,
    cadastrar 
};

