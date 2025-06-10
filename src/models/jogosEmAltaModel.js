var database = require('../database/config');


function GraficodePizza(id_usuario, tipodeQuiz) {
    console.log(id_usuario)
    var instrucao = `
  



            SELECT 
            quiz.tipodeQuiz,
            usuario.nome,
            SUM(respostaUsuarioQuiz.acerto) AS total_acertos,
            SUM(respostaUsuarioQuiz.erro) AS total_erros
            FROM quiz
            INNER JOIN 
                respostaUsuarioQuiz ON respostaUsuarioQuiz.Fkid_Quiz = quiz.idQuiz
            INNER JOIN 
                usuario ON usuario.id_usuario = respostaUsuarioQuiz.Fkid_usuario
            WHERE 
                respostaUsuarioQuiz.Fkid_usuario = ${id_usuario}
                AND quiz.idQuiz = ${tipodeQuiz}
            GROUP BY 
            quiz.tipodeQuiz, usuario.nome;
   
   
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