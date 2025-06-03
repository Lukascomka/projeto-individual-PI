var database = require('../database/config');


function listar() {
    var instrucao = `
    SELECT 
    usuario.nome AS nome_usuario,
    publicacao.conteudo_publicacao, 
    publicacao.dataPublicacao, 
    usuario.id_usuario               
    FROM usuario
    INNER JOIN publicacao 
    ON usuario.id_usuario = publicacao.Fk_id_usuario
    order by publicacao.dataPublicacao asc;
    
    `;

    console.log("Executando a instrução SQL para listar todos os posts para o feed: \n" + instrucao);

    return database.executar(instrucao);
}

function cadastrar(conteudo_publicacao) {

    var instrucao = `
    INSERT INTO publicacao (conteudo_publicacao, Fk_id_usuario) VALUES ('${conteudo_publicacao}',1 
    );
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarQuiz(
    Fkid_usuario,
    Fkid_Quiz,
    RespostaCorreta,
    RespostaErrada
) {

    var instrucao = `
        INSERT INTO respostaUsuarioQuiz (Fkid_usuario, Fkid_Quiz, acerto, erro)
        VALUES (${Fkid_usuario}, ${Fkid_Quiz}, ${RespostaCorreta}, ${RespostaErrada})
    `;
    console.log('Executando a instrução SQL para inserir dados do quiz no banco', instrucao);
    return database.executar(instrucao);
}

function GraficodePizza() {
    var instrucao = `
            SELECT 
            usuario.nome AS nome_usuario,
            AVG(respostaUsuarioQuiz.acerto) AS total_acertos,
            AVG(respostaUsuarioQuiz.erro) AS total_erros
            FROM usuario
            INNER JOIN respostaUsuarioQuiz
            ON usuario.id_usuario = respostaUsuarioQuiz.Fkid_usuario
            WHERE usuario.id_usuario = 1
            GROUP BY usuario.nome, usuario.id_usuario;
        `;
    console.log('Executando a instrução SQL para listar o gráfico individual\n ' + instrucao);
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

// function InserirTipoDeQuiz(select_option){
//     var instrucao = `
//     INSERT INTO quiz (tipodeQuiz) VALUES ('${select_option}');
//     `;

//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);

// }


module.exports = {
    cadastrar,
    listar,
    cadastrarQuiz,
    GraficodeBarra,
    GraficodePizza,
    // InserirTipoDeQuiz
};

