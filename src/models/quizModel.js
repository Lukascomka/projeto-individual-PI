var database = require('../database/config');

function cadastrarQuiz(
    Fkid_usuario,
    Fkid_Quiz,
    RespostaCorreta,
    RespostaErrada
) {
    console.log(Fkid_Quiz)
    console.log(Fkid_usuario)
    console.log(RespostaCorreta)
    console.log(RespostaErrada)
    
    var instrucao = `
    INSERT INTO respostaUsuarioQuiz (Fkid_usuario, Fkid_Quiz, acerto, erro)
    VALUES (${Fkid_usuario}, ${Fkid_Quiz}, ${RespostaCorreta}, ${RespostaErrada})
`;
    console.log('Executando a instrução SQL para inserir dados do quiz no banco', instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarQuiz
}