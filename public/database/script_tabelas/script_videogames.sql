
create database videogames;
use videogames;

create table usuario (
id_usuario int auto_increment primary key,
nome varchar(30),
sobrenome varchar (30),
email varchar (30) not null UNIQUE, 
senha varchar(10));


CREATE table quiz( 
    idQuiz int primary key auto_increment,
    tipoDeQuiz VARCHAR(45) not null
);

create table respostaUsuarioQuiz (

    
    Fkid_usuario int,
    Fkid_Quiz int, 
    acerto int,
    erro int,
    dataPontuacao DATETIME not NULL,
    
    Foreign Key (Fkid_usuario) REFERENCES usuario(id_usuario),
    Foreign Key (Fkid_Quiz) REFERENCES quiz(idQuiz),
    PRIMARY key (Fkid_usuario,Fkid_Quiz);
);

create table publicacao (
    idPublicacao int primary key auto_increment,
    conteudo_publicacao text,
    dataPublicacao datetime
    Fk_id_usuario int,
    Foreign Key (Fk_id_usuario) REFERENCES usuario(id_usuario),
);



