-- -----------------------------------------------------
-- Schema videogames
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `videogames` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `videogames` ;

-- -----------------------------------------------------
-- Table `videogames`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `videogames`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NULL DEFAULT NULL,
  `sobrenome` VARCHAR(30) NULL DEFAULT NULL,
  `email` VARCHAR(30) NOT NULL,
  `senha` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
) ENGINE = InnoDB AUTO_INCREMENT = 21 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `videogames`.`publicacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `videogames`.`publicacao` (
  `idPublicacao` INT NOT NULL AUTO_INCREMENT,
  `conteudo_publicacao` TEXT NULL DEFAULT NULL,
  `dataPublicacao` TIMESTAMP NULL DEFAULT NULL,
  `Fk_id_usuario` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idPublicacao`),
  INDEX `Fk_id_usuario` (`Fk_id_usuario` ASC) VISIBLE,
  CONSTRAINT `publicacao_ibfk_1`
    FOREIGN KEY (`Fk_id_usuario`)
    REFERENCES `videogames`.`usuario` (`id_usuario`)
) ENGINE = InnoDB AUTO_INCREMENT = 27 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `videogames`.`quiz`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `videogames`.`quiz` (
  `idQuiz` INT NOT NULL AUTO_INCREMENT,
  `tipodeQuiz` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`idQuiz`)
) ENGINE = InnoDB AUTO_INCREMENT = 21 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `videogames`.`respostaUsuarioQuiz`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `videogames`.`respostaUsuarioQuiz` (
  `Fkid_usuario` INT NOT NULL,
  `Fkid_Quiz` INT NOT NULL,
  `acerto` INT NULL DEFAULT NULL,
  `erro` INT NULL DEFAULT NULL,
  `dataPontuacao` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Fkid_usuario`, `Fkid_Quiz`),
  INDEX `Fkid_Quiz` (`Fkid_Quiz` ASC) VISIBLE,
  CONSTRAINT `respostaUsuarioQuiz_ibfk_1`
    FOREIGN KEY (`Fkid_usuario`)
    REFERENCES `videogames`.`usuario` (`id_usuario`),
  CONSTRAINT `respostaUsuarioQuiz_ibfk_2`
    FOREIGN KEY (`Fkid_Quiz`)
    REFERENCES `videogames`.`quiz` (`idQuiz`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;