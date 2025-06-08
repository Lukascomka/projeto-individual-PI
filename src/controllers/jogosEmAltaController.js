var jogosEmAltaModel = require("../models/jogosEmAltaModel");

function GraficodePizza(req, res) {
    var id_usuario = req.params.id_usuario;
    var Fkid_Quiz = req.params.Fkid_Quiz;

    
    jogosEmAltaModel.GraficodePizza(id_usuario, Fkid_Quiz)
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
    jogosEmAltaModel.GraficodeBarra()
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
    GraficodePizza,
    GraficodeBarra


};