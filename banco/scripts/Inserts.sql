-- -----------------------------------------------------
-- Data for table TbUsuario
-- -----------------------------------------------------
INSERT INTO ADT_DB.TbNivelAcesso (idNivelAcesso, nivel) VALUES (1, 'Administrador');
INSERT INTO ADT_DB.TbNivelAcesso (idNivelAcesso, nivel) VALUES (2, 'Usuário');

COMMIT;


-- -----------------------------------------------------
-- Data for table `ADT_DB`.`TbUsuario`
-- -----------------------------------------------------
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (1, 'Kayo', 'Francisco', 'kayofrancisco@hotmail.com', 'kaka3333', 1, 0, '2019-09-23');
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (2, 'David', 'Pena', 'davidpena@hotmail.com', 'dada1111', 1, 0, '2019-09-23');
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (3, 'Bryan', 'Souza', 'bryansouza@gmail.com', 'brbr2222', 2, 17, '2019-09-23');
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (4, 'Robson', 'Silva', 'robsonsilva@hotmail.com', 'roro5555', 2, 6, '2019-05-15');
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (5, 'Rafaella', 'Santos', 'rafaellasantos@gmail.com', 'rara7777', 2, 15, '2019-05-15');
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (6, 'Lucas', 'Pereira', 'lucaspereira@hotmail.com', 'lulu7777', 1, 0, '2019-05-15');
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (7, 'Leonardo', 'Braga', 'leonardobraga@hotmail.com', 'lele8888', 1, 0, '2019-05-15');
INSERT INTO ADT_DB.TbUsuario(idUsuario, nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES (8, 'Dani', 'Souza', 'danisouza@gmail.com', 'dada9999', 1, 0, '2019-05-15');

COMMIT;


-- -----------------------------------------------------
-- Data for table TbLocal
-- -----------------------------------------------------
INSERT INTO ADT_DB.TbLocal (idLocal, nome, descricao, link, longitude, latitude, pontos, dataCadastro) VALUES (1, 'Pontão do Lago Sul', 'À beira do lago, o Pontão é o centro gastronômico mais especial da cidade de Brasília, reunindo seis dos melhores restaurantes', 'https://www.pontao.com.br/home', '-47,8734', '-15,8264', 10, '2019-09-23');
INSERT INTO ADT_DB.TbLocal (idLocal, nome, descricao, link, longitude, latitude, pontos, dataCadastro) VALUES (2, 'Santuário Dom Bosco', 'O Santuário Dom Bosco é uma das mais conhecidas igrejas de Brasília, e uma das imagens mais frequentes nos cartões-postais da cidade. Ele foi criado pelo arquiteto Carlos Alberto Naves', NULL, '-47,8825', '-15,7941', 6, '2019-09-23');
INSERT INTO ADT_DB.TbLocal (idLocal, nome, descricao, link, longitude, latitude, pontos, dataCadastro) VALUES (3, 'Memorial JK', 'O Memorial JK é um museu brasileiro localizado na Zona Cívico-Administrativa Eixo Monumental', 'http://www.memorialjk.com.br/', '-47,9132', '-15,7846', 8, '2019-09-23');
INSERT INTO ADT_DB.TbLocal (idLocal, nome, descricao, link, longitude, latitude, pontos, dataCadastro) VALUES (4, 'Parque da Cidade Sarah Kubitschek', 'O Parque da Cidade Sarah Kubitschek é o maior parque urbano do mundo, ultrapassando, inclusive, o Central Park', 'http://wbrasilia.com/parquedacidade.htm', '-47,9038', '-15,7924', 9, '2019-09-23');
INSERT INTO ADT_DB.TbLocal (idLocal, nome, descricao, link, longitude, latitude, pontos, dataCadastro) VALUES (5, 'Catedral Metropolitana', 'A Catedral Metropolitana Nossa Senhora Aparecida, mais conhecida como Catedral de Brasília, é a catedral católica que serve a Brasília, Brasil, e é a sede da Arquidiocese de Brasília', 'https://catedral.org.br/', '-47,8755', '15,7984', 7, '2019-09-23');
INSERT INTO ADT_DB.TbLocal (idLocal, nome, descricao, link, longitude, latitude, pontos, dataCadastro) VALUES (6, 'Torre de Televisão', 'A Torre de TV de Brasília é uma torre de transmissão radiofônica e televisiva construída em Brasília e inaugurada em 1967 com 224 metros de altura. Projetada por Lúcio Costa, a Torre da TV é um dos poucos edifícios importantes de Brasília que não são uma criação de Oscar Niemeyer', 'http://wbrasilia.com/torredetv.htm', ' -47,8928', '-15,7906', 8, '2019-09-23');

COMMIT;


-- -----------------------------------------------------
-- Data for table TbUsuarioLocal
-- -----------------------------------------------------
INSERT INTO ADT_DB.TbUsuarioLocal (idUsuarioLocal, dataIncluao, idUsuario, idLocal, pontos) VALUES (1, '2019-09-23', 3, 1, 10);
INSERT INTO ADT_DB.TbUsuarioLocal (idUsuarioLocal, dataIncluao, idUsuario, idLocal, pontos) VALUES (2, '2019-09-23', 3, 5, 7);
INSERT INTO ADT_DB.TbUsuarioLocal (idUsuarioLocal, dataIncluao, idUsuario, idLocal, pontos) VALUES (3, '2019-09-23', 4, 2, 6);
INSERT INTO ADT_DB.TbUsuarioLocal (idUsuarioLocal, dataIncluao, idUsuario, idLocal, pontos) VALUES (4, '2019-09-23', 5, 5, 7);
INSERT INTO ADT_DB.TbUsuarioLocal (idUsuarioLocal, dataIncluao, idUsuario, idLocal, pontos) VALUES (5, '2019-09-23', 5, 3, 8);

COMMIT;