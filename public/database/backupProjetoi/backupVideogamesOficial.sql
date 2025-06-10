-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: localhost    Database: videogames
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `publicacao`
--

DROP TABLE IF EXISTS `publicacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacao` (
  `idPublicacao` int NOT NULL AUTO_INCREMENT,
  `conteudo_publicacao` text,
  `dataPublicacao` timestamp NULL DEFAULT NULL,
  `Fk_id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`idPublicacao`),
  KEY `Fk_id_usuario` (`Fk_id_usuario`),
  CONSTRAINT `publicacao_ibfk_1` FOREIGN KEY (`Fk_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacao`
--

LOCK TABLES `publicacao` WRITE;
/*!40000 ALTER TABLE `publicacao` DISABLE KEYS */;
INSERT INTO `publicacao` VALUES (1,'Acabei de completar o quiz de Gramática Portuguesa com 80% de acertos! Foi desafiador, mas aprendi muito.','2023-10-15 17:35:00',1),(2,'Alguém tem dicas para melhorar no quiz de Inglês Intermediário? Achei as perguntas sobre phrasal verbs bem difíceis.','2023-11-02 12:20:22',2),(3,'Orgulhoso dos meus 90% no quiz de Matemática Básica! Revisar os conceitos valeu a pena.','2023-09-28 19:50:10',3),(4,'Como programador iniciante, adorei o quiz de Python. Errei apenas 3 questões sobre list comprehension.','2023-12-05 14:25:33',4),(5,'O quiz sobre Cinema Internacional me fez perceber quantos filmes incríveis ainda preciso assistir!','2023-10-30 21:15:45',5),(6,'Nota 100% em Biologia Celular! Toda aquela revisão sobre mitocôndrias finalmente fez sentido.','2023-11-18 16:30:18',6),(7,'Geografia Mundial é mais complexa do que imaginava. Preciso estudar mais os países da Ásia Central.','2023-12-01 13:10:29',7),(8,'Educação Financeira deveria ser obrigatória para todos. O quiz me mostrou o quanto preciso aprender sobre investimentos.','2023-09-14 18:55:12',8),(9,'Quem mais ama música clássica? O quiz tinha ótimas perguntas sobre compositores do período romântico.','2023-10-22 11:35:47',9),(10,'Economia Global é fascinante! Errei questões sobre taxas de câmbio, mas foi um ótimo aprendizado.','2023-11-29 20:20:38',10),(11,'História do Brasil é minha paixão! Só errei uma questão sobre o período colonial.','2023-12-12 17:45:55',11),(12,'Literatura Brasileira me fez relembrar grandes obras que li na faculdade. Preciso reler alguns clássicos.','2023-10-08 15:25:04',12),(13,'Dicas para o quiz de Nutrição? Algumas perguntas sobre vitaminas me confundiram bastante.','2023-11-25 12:40:26',13),(14,'Física Quântica é desafiador, mas incrível! Ainda estou processando algumas respostas que errei.','2023-09-30 19:15:42',14),(15,'Ciências Naturais sempre foi meu ponto fraco, mas consegui 70%! Estou evoluindo.','2023-12-08 14:50:13',15),(16,'Arte Moderna me fez apreciar ainda mais movimentos como o expressionismo abstrato.','2023-10-19 21:35:27',16),(17,'Direito Constitucional é essencial para qualquer cidadão. Recomendo o quiz para todos!','2023-11-07 17:00:39',17),(18,'Marketing Digital está em constante evolução. O quiz abordou ótimos pontos sobre SEO e métricas.','2023-12-15 13:30:51',18),(19,'Sustentabilidade Ambiental é o futuro! O quiz me fez refletir sobre meu consumo diário.','2023-09-21 18:45:08',19),(20,'Psicologia Cognitiva é fascinante! Errei algumas questões sobre memória de longo prazo, mas foi ótimo para aprender.','2023-10-12 11:20:34',20),(24,'Post inserido com sucesso no banco de dados!','2025-05-25 01:30:00',1),(25,'Olá Mundo',NULL,1),(26,'Bem vindo ao meu blog',NULL,1),(27,'Bem vindo ao Mundo',NULL,22);
/*!40000 ALTER TABLE `publicacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `idQuiz` int NOT NULL AUTO_INCREMENT,
  `tipodeQuiz` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idQuiz`),
  CONSTRAINT `chk_tipodeQuiz` CHECK ((`tipodeQuiz` in (_utf8mb4'playstation',_utf8mb4'xbox',_utf8mb4'fliperama')))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1,'playstation'),(2,'xbox'),(3,'fliperama');
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respostaUsuarioQuiz`
--

DROP TABLE IF EXISTS `respostaUsuarioQuiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respostaUsuarioQuiz` (
  `Fkid_usuario` int NOT NULL,
  `Fkid_Quiz` int NOT NULL,
  `acerto` int DEFAULT NULL,
  `erro` int DEFAULT NULL,
  `dataPontuacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Fkid_usuario`,`Fkid_Quiz`),
  KEY `Fkid_Quiz` (`Fkid_Quiz`),
  CONSTRAINT `respostaUsuarioQuiz_ibfk_1` FOREIGN KEY (`Fkid_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `respostaUsuarioQuiz_ibfk_2` FOREIGN KEY (`Fkid_Quiz`) REFERENCES `quiz` (`idQuiz`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respostaUsuarioQuiz`
--

LOCK TABLES `respostaUsuarioQuiz` WRITE;
/*!40000 ALTER TABLE `respostaUsuarioQuiz` DISABLE KEYS */;
INSERT INTO `respostaUsuarioQuiz` VALUES (1,1,1,9,'2025-05-25 18:26:06'),(1,2,0,10,'2025-05-27 02:02:55'),(1,3,8,2,'2023-10-15 17:30:00'),(2,1,6,4,'2023-11-02 12:15:22'),(3,1,9,1,'2023-09-28 19:45:10'),(4,3,7,3,'2023-12-05 14:20:33'),(5,3,5,5,'2023-10-30 21:10:45'),(6,3,10,0,'2023-11-18 16:25:18'),(7,1,6,4,'2023-12-01 13:05:29'),(8,2,8,2,'2023-09-14 18:50:12'),(9,2,7,3,'2023-10-22 11:30:47'),(10,1,5,5,'2023-11-29 20:15:38'),(11,2,9,1,'2023-12-12 17:40:55'),(12,3,4,6,'2023-10-08 15:20:04'),(13,1,8,2,'2023-11-25 12:35:26'),(14,1,6,4,'2023-09-30 19:10:42'),(15,2,7,3,'2023-12-08 14:45:13'),(16,1,5,5,'2023-10-19 21:30:27'),(17,2,9,1,'2023-11-07 16:55:39'),(18,2,6,4,'2023-12-15 13:25:51'),(19,2,8,2,'2023-09-21 18:40:08'),(20,3,7,3,'2023-10-12 11:15:34'),(22,1,9,1,'2025-06-03 16:01:00'),(22,2,10,0,'2025-06-03 19:30:14');
/*!40000 ALTER TABLE `respostaUsuarioQuiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) DEFAULT NULL,
  `sobrenome` varchar(30) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Ana','Silva','ana.silva@email.com','Ana123!'),(2,'Carlos','Oliveira','carlos.oliveira@empresa.com','C@rl0s2023'),(3,'Mariana','Santos','mariana.santos@google.com','Mari#2024'),(4,'Pedro','Almeida','pedro.almeida@tech.com','P3dr0@Dev'),(5,'Juliana','Costa','juliana.costa@design.com','JuC0sTa!'),(6,'Ricardo','Ferreira','ricardo.ferreira@finance.com','R1cFin$'),(7,'Fernanda','Lima','fernanda.lima@marketing.com','F3rn@nd4'),(8,'Lucas','Martins','lucas.martins@engenharia.com','LkM@rt1n'),(9,'Beatriz','Rocha','beatriz.rocha@medicina.com','B1@R0ch4'),(10,'Gabriel','Pereira','gabriel.pereira@musica.com','G@bP3r3ir@'),(11,'Isabela','Gomes','isabela.gomes@arte.com','Is@2024!'),(12,'Rafael','Barbosa','rafael.barbosa@esporte.com','Raf@El1te'),(13,'Patrícia','Nunes','patricia.nunes@educacao.com','P@tr1c14E'),(14,'Thiago','Carvalho','thiago.carvalho@ti.com','Th1@g0T1'),(15,'Camila','Mendes','camila.mendes@rh.com','C@m1l@RH'),(16,'Eduardo','Souza','eduardo.souza@juridico.com','EdS0uz@Law'),(17,'Vanessa','Rodrigues','vanessa.rodrigues@saude.com','V@n3ss4S'),(18,'Marcelo','Cavalcanti','marcelo.cavalcanti@eng.com','M@rc3l0Eng'),(19,'Daniela','Fonseca','daniela.fonseca@adm.com','D@n1F0ns'),(20,'Bruno','Teixeira','bruno.teixeira@games.com','BrUn0G@m3r'),(21,'Lukas','Mota','lukas.mota@icloud.com','100Vergonha@'),(22,'LUKAS','SOUZA','lukas.mota@outlook.com','123Lukas@');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-10  9:14:14
