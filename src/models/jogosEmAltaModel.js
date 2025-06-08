var database = require('../database/config');


function GraficodePizza(id_usuario) {
    console.log(id_usuario)
    var instrucao = `
   SELECT 
            usuario.nome AS nome,
            AVG(respostaUsuarioQuiz.acerto) AS total_acertos,
            AVG(respostaUsuarioQuiz.erro) AS total_erros
        FROM usuario
        INNER JOIN respostaUsuarioQuiz
            ON usuario.id_usuario = respostaUsuarioQuiz.Fkid_usuario
        WHERE usuario.id_usuario = ${id_usuario}
        GROUP BY usuario.nome, usuario.id_usuario;
   
   
        `;

    console.log('Executando a instrução SQL para listar o gráfico individual:\n' + instrucao);
    return database.executar(instrucao);
}



function GraficodeBarra() {
    var instrucao = `
            SELECT
	quiz.tipodeQuiz,
    AVG(respostaUsuarioQuiz.acerto) AS total_acertos,
    AVG(respostaUsuarioQuiz.erro) AS total_erros
FROM usuario
INNER JOIN respostaUsuarioQuiz
    ON usuario.id_usuario = respostaUsuarioQuiz.Fkid_usuario
INNER JOIN quiz
    ON respostaUsuarioQuiz.Fkid_Quiz = quiz.idQuiz  
GROUP BY 
    quiz.tipodeQuiz
;

        `;
    console.log('Executando a instrução SQL para listar o gráfico geral \n ' + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    GraficodeBarra,
    GraficodePizza
}