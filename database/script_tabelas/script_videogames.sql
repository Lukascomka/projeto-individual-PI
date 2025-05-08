
create database videogames;
use videogames;
create table usuario (
id_usuario int auto_increment primary key,
nome varchar(30),
sobrenome varchar (30),
email varchar (30), 
senha varchar(20));

create table plataforma(
id_plataforma int auto_increment primary key, 
tipo_de_plataforma varchar(20));

create table usuario_plataforma(
Fk_id_usuario int,
Fk_id_plataforma int,
primary key (Fk_id_usuario, Fk_id_plataforma));

alter table usuario_plataforma  
add constraint Fk_id_usuario 
foreign key (Fk_id_usuario) references usuario(id_usuario);
-- diga qual tabela ser alterada
alter table usuario_plataforma 
-- diga oque sera adicionado como column ou rename ou uma constraint ou check e o nome
add constraint Fk_id_plataforma 
-- foreign primeiro vem a tabela referenciada em parentes 
foreign key (Fk_id_plataforma) 
-- depois a que ela faz referencia primeiro a tabela depois em parentes a coluna
references plataforma(id_plataforma);


create table genero (
id_genero int auto_increment primary key,
genero varchar (20));

-- chave composta que também é uma foreign key
create table plataforma_genero ( 
Fk_id_plataforma int,
Fk_id_genero int,
primary key (Fk_id_plataforma, Fk_id_genero),
foreign key (Fk_id_plataforma) references plataforma(id_plataforma),
foreign key (Fk_id_genero) references genero(id_genero));

create table usuario_genero(
Fk_id_genero int,
Fk_id_usuario int, 
primary key (Fk_id_usuario,Fk_id_genero),
foreign key (Fk_id_genero) references genero(id_genero),
foreign key  (fk_id_usuario) references usuario(id_usuario)
);

