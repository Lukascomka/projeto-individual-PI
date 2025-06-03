var mainModel = require("../models/mainModel");

function listar(req,res) {
    mainModel.listar()
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
    var conteudo_publicacao = req.body.conteudo;
    

    if (conteudo_publicacao == undefined) {
        res.status(400).send("Você não inseriu nada para ser postado");
    } else {
        mainModel.cadastrar(conteudo_publicacao)
            .then(function () {
                res.status(201).send("Parabéns por seu post!");
            })
            .catch(function (erro) {
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrarQuiz(req, res) {
    console.log("Request Body:", req.body);
    const { RespostaCorreta, RespostaErrada, id_usuario, Fkid_Quiz } = req.body;

    
    const Fkid_usuario = id_usuario

    if (RespostaCorreta === undefined || RespostaErrada === undefined || !Fkid_usuario || !Fkid_Quiz) {
        return res.status(400).send('Dados do quiz incompletos.');
    }

    mainModel.cadastrarQuiz(Fkid_usuario, Fkid_Quiz, RespostaCorreta, RespostaErrada)
        .then(() => {
            res.status(200).send("Quiz Respondido com sucesso!");
        })
        .catch(erro => {
            console.error("Erro ao cadastrar quiz:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function GraficodePizza(req, res) {
    var id_usuario = req.params.id_usuario;
    var Fkid_Quiz = req.params.Fkid_Quiz;

    
    mainModel.GraficodePizza(id_usuario, Fkid_Quiz)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
                    
                ;
            } else if (resultado.length == 0){
                res.status(204).send("Nenhum resultado encontrado para o gráfico de pizza!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar dados do gráfico de pizza:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function GraficodeBarra(req, res) {
    mainModel.GraficodeBarra()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado para o gráfico de barras!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar dados do gráfico de barras:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}



module.exports = {
    listar,
    cadastrar,
    cadastrarQuiz,
    GraficodePizza,
    GraficodeBarra

};

