var database = require('../database/config');

function listar() {
    var instrucao = `
        SELECT usuario.nome, publicacao.conteudo_publicacao, publicacao.dataPublicacao, usuario.id,              
        FROM usuario
        INNER JOIN publicacao 
        ON usuario.id_usuario = publicacao.Fk_id_usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao); 

    return database.executar(instrucao);
}

function cadastrar(conteudo_publicacao, dataPublicacao) {
    console.log("Data a ser inserida no banco (na model):", dataPublicacao);
   
    var instrucao = `
        INSERT INTO publicacao (conteudo_publicacao, Fk_id_usuario, dataPublicacao) VALUES ('${conteudo_publicacao}',1,'${dataPublicacao}' 
        );
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar
};
