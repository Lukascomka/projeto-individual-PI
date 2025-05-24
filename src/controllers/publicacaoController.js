var postarModel = require("../models/publicacaoModel");

function listar(req, res) {
    postarModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var Postar = req.body.conteudoPost;

    if (Postar == undefined) {
        res.status(400).send("Você não inseriu nada para ser postado");
    } else {
        postarModel.cadastrar(Postar)
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

