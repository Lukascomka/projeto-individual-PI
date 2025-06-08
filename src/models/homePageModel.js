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

function cadastrar(conteudo_publicacao, Fk_id_usuario) {

    var instrucao = `
    INSERT INTO publicacao (conteudo_publicacao, Fk_id_usuario) VALUES ('${conteudo_publicacao}','${Fk_id_usuario}' 
    );
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar,
    cadastrar
}