var quizModel = require("../models/quizModel");

function cadastrarQuiz(req, res) {
    console.log("Request Body:", req.body);
    const { RespostaCorreta, RespostaErrada, id_usuario, Fkid_Quiz } = req.body;

    
    const Fkid_usuario = id_usuario

    if (RespostaCorreta === undefined || RespostaErrada === undefined || !Fkid_usuario || !Fkid_Quiz) {
        return res.status(400).send('Dados do quiz incompletos.');
    }

    quizModel.cadastrarQuiz(Fkid_usuario, Fkid_Quiz, RespostaCorreta, RespostaErrada)
        .then(() => {
            res.status(200).send("Quiz Respondido com sucesso!");
        })
        .catch(erro => {
            console.error("Erro ao cadastrar quiz:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    cadastrarQuiz
}