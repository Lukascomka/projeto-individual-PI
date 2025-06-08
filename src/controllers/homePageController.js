var homePageModel = require("../models/homePageModel");

function listar(req,res) {
    homePageModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Ainda não há posts para exibir no feed")

            }
        })
        .catch(function (erro) {
            console.error("Houve um erro ao buscar os post para o feed", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    const { conteudo_publicacao, Fk_id_usuario } = req.body; 

    if (conteudo_publicacao == undefined) {
        res.status(400).send("Você não inseriu nada para ser postado");
    } else {
        homePageModel.cadastrar(conteudo_publicacao,Fk_id_usuario)
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
}