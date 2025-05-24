var database = require('../database/config');

function listar() {
    var instrucao = `
        SELECT usuario.nome, publicacao.conteudo_publicacao, publicacao.dataPublicacao             
        FROM usuario
        INNER JOIN publicacao 
        ON usuario.id_usuario = publicacao.Fk_id_usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao); 

    return database.executar(instrucao);
}

function cadastrar(conteudo_publicacao) {
    var instrucao = `
        INSERT INTO publicacao (conteudo_publicacao) VALUES ('${conteudo_publicacao}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar
};
