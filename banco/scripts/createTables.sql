CREATE SCHEMA IF NOT EXISTS `ADT_DB` DEFAULT CHARACTER SET utf8 ;
USE `ADT_DB` ;

-- -----------------------------------------------------
-- Table TbNivelAcesso
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TbNivelAcesso(
  idNivelAcesso INT NOT NULL,
  nivel VARCHAR(45) NOT NULL,
  PRIMARY KEY (idNivelAcesso)
);


-- -----------------------------------------------------
-- Table TbUsuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TbUsuario(
  idUsuario INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  sobreNome VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL,
  senha VARCHAR(16) NOT NULL,
  idNivelAcesso INT NOT NULL,
  qtdPontos INT NULL,
  dataCadastro DATE NULL,
  PRIMARY KEY (idUsuario),
  CONSTRAINT fk_TbUsuario_TbNivelAcesso
    FOREIGN KEY (idNivelAcesso)
    REFERENCES TbNivelAcesso(idNivelAcesso)
);


-- -----------------------------------------------------
-- Table TbLocal
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TbLocal(
  idLocal INT NOT NULL,
  nome VARCHAR(200) NOT NULL,
  descricao VARCHAR(500),
  link VARCHAR(1000),
  longitude VARCHAR(20),
  latitude VARCHAR(20),
  pontos INT NOT NULL,
  dataCadastro DATE,
  PRIMARY KEY (idLocal)
);


-- -----------------------------------------------------
-- Table TbUsuarioLocal
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TbUsuarioLocal(
  idUsuarioLocal INT NOT NULL,
  dataIncluao DATE NOT NULL,
  idUsuario INT NOT NULL,
  idLocal INT NOT NULL,
  pontos INT,
  PRIMARY KEY (idUsuarioLocal),
  CONSTRAINT fk_TbClienteLocal_TbUsuario
    FOREIGN KEY (idUsuario)
    REFERENCES TbUsuario(idUsuario),
  CONSTRAINT fk_TbUsuarioLocal_TbLocal
    FOREIGN KEY (idLocal)
    REFERENCES TbLocal(idLocal)
);