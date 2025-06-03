-- Criação do banco de dados
CREATE DATABASE videogames;
USE videogames;

-- Tabela usuario
CREATE TABLE usuario (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(30),
  sobrenome VARCHAR(30),
  email VARCHAR(30) NOT NULL UNIQUE,
  senha VARCHAR(45)
);

-- Tabela quiz
CREATE TABLE quiz (
  idQuiz INT AUTO_INCREMENT PRIMARY KEY,
  tipodeQuiz VARCHAR(15)
);

-- Tabela publicacao
CREATE TABLE publicacao (
  idPublicacao INT AUTO_INCREMENT PRIMARY KEY,
  conteudo_publicacao TEXT,
  dataPublicacao TIMESTAMP,
  Fk_id_usuario INT,
  FOREIGN KEY (Fk_id_usuario) REFERENCES usuario(id_usuario)
);

-- Tabela respostaUsuarioQuiz
CREATE TABLE respostaUsuarioQuiz (
  Fkid_usuario INT NOT NULL,
  Fkid_Quiz INT NOT NULL,
  acerto INT,
  erro INT,
  dataPontuacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (Fkid_usuario, Fkid_Quiz),
  FOREIGN KEY (Fkid_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (Fkid_Quiz) REFERENCES quiz(idQuiz)
);