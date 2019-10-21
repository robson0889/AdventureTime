const mysql = require("promise-mysql");
const crypto = require("crypto");

let connection;

const settings = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

function deleteLocais(req, res){
  const id = req.query.id;
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query(`DELETE FROM TbLocal WHERE idLocal = ${id}`);
  })
  .then((results) => {
    console.log(results);
    //do other stuff maybe
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"msg": "local deletado com sucesso?"}));
  });
}

function getAvailableLocais(req, res){
  const user = req.query.user;
  
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query("SELECT idLocal, nome, dataIncluao FROM TbUsuario A JOIN TbUsuarioLocal B ON A.idUsuario = B.idUsuario JOIN TbLocal C ON B.idLocal != C.idLocal WHERE TbUsuario = x AND TIMESTAMPDIFF(MINUTE, C.dataCadastro, NOW()) <= 10");
  })
  .then((rows) => {
    let info = [];

    for(let i = 0; i < rows.length; i++){
      info[i] = {
        id: rows[i].idLocal,
        nome: rows[i].nome,
        dataIncluao: rows[i].dataIncluao
      };
    }
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"info": info}));
  });
}

function getLocais(req, res){
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query("SELECT * FROM TbLocal");
  })
  .then((rows) => {
    let info_locais = [];
    for(let i = 0; i > rows.length; i++){
      info_locais = {
        id: rows[i].idLocal,
        nome: rows[i].nome,
        descricao: rows[i].descricao,
        link: rows[i].link,
        longitude: rows[i].longitude,
        latitude: rows[i].latitude,
        pontos: rows[i].pontos,
        dataCadastro: rows[i].dataCadastro
      };
    }
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"info": info_locais}));
  });
}

function getNewLocais(req, res){
  const user = req.query.user;
  
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query("SELECT idLocal, nome FROM TbUsuario A JOIN TbUsuarioLocal B ON A.idUsuario = B.idUsuario JOIN TbLocal C ON B.idLocal != C.idLocal WHERE TbUsuario = x AND A.dataCadastro <= B.dataCadastro");
  })
  .then((rows) => {
    let info = [];
    
    for(let i = 0; i < rows.length; i++){
      info[i] = {
        id: rows[i].idLocal,
        nome: rows[i].nome
      };
    }
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"info": info}));
  });
}

function getUser(req, res){
  const user = req.query.user;
  let info = {};
  
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query(`SELECT
  A.idUsuario AS 'id',
	A.nome,
  COUNT(C.pontos) AS 'pontos',
	COUNT(C.idLocal) AS 'locaisDiferentes',
	  FROM TbUsuario A
	  JOIN TbUsuarioLocal B ON A.idUsuario = B.idUsuario
	  JOIN TbLocal C ON B.idLocal = C.idLocal
      WHERE idUsuario = ${user};`);
  })
  .then((rows) => {
    info["id"]: rows[0].id;
    info["nome"]: rows[0].nome;
    info["pontos"]: rows[0].pontos;
    info["locaisDiferentes"]: rows[0].locaisDiferentes;
    
    return connection.query(`SELECT
  nome AS 'ultimoLocal',
  pontos AS 'ultimoPonto',
  DAY(B.dataIncluao) AS 'ultimoDia',
  TIMESTAMPDIFF(DAY, DAY(B.dataIncluao), NOW()) AS 'diasAtras',
    FROM TbUsuario A
      JOIN TbUsuarioLocal B ON A.idUsuario = B.idUsuario
      JOIN TbLocal C ON B.idLocal = C.idLocal
        WHERE idUsuario = ${user}
          ORDER BY B.dataIncluao DESC LIMIT 1;`);
  })
  .then((rows) => {
      info["ultimoLocal"]: rows[0].ultimoLocal;
      info["ultimoPonto"]: rows[0].ultimoPonto;
      info["ultimoDia"]: rows[0].ultimoDia;
      info["diasAtras"]: `Visitado há ${rows[0].diasAtras} dia(s) atrás`;
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"info": info}));
  });
}

function login(req, res){
  const user = req.body.user;
  const pass = req.body.pass;
  
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query(`SELECT senha FROM TbUsuario WHERE email = ${user}`);
  })
  .then((rows) => {
    const isLogged = (hasher(pass) === rows[0].senha);
	  const statusToSend = isLogged ? 200 : 403;

	  res.writeHead(statusToSend, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"isLogged": isLogged}));
  });
}

function setLocais(req, res){
  const info = req.body.info;
  const now = new Date();
  
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query(`INSERT INTO TbLocal (nome, descricao, link, longitude, latitude, pontos, dataCadastro) VALUES ('${info.nome}', '${info.descricao}', '${info.link}', '${info.longitude}', '${info.latitude}', 10, '${now}')`);
  })
  .then((results) => {
    console.log(results);
    //do other stuff maybe
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"msg": "local inserido com sucesso?"}));
  });
}

function setUser(req, res){
  const info = req.body.info;
  const now = new Date();
  
  if(info.senha !== info.senhaConfirmacao){
    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"msg": "senhas não conferem"}));
    return null;
  }
  
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    const senhaHasheada = hasher(info.senha);
    return connection.query(`INSERT INTO TbUsuario (nome, sobreNome, email, senha, idNivelAcesso, qtdPontos, dataCadastro) VALUES ('${info.nome}', '${info.sobreNome}', '${info.email}', '${senhaHasheada}'), 1, 0, '${now}'`);
  })
  .then((results) => {
    console.log(results);
    //do other stuff maybe
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"msg": "usuário inserido com sucesso?"}));
  });
}

function updateLocais(req, res){
  const info = req.body.info;
  const update = `UPDATE TbLocal SET nome = '${info.nome}', descricao = '${info.descricao}', link = '${info.link}', longitude = '${info.longitude}', latitude = '${info.latitude}' WHERE idLocal = info.id`;
  
  mysql.createConnection(settings)
  .then((pool) => {
    connection = pool;
    return connection.query(update);
  })
  .then((results) => {
    console.log(results);
    //do other stuff maybe
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"msg": "informações atualizadas com sucesso?"}));
  });
}

function hasher(plainText=""){
  return crypto.createHash('md5').update(plainText).digest('hex');
}

module.exports = {
  deleteLocais: deleteLocais,
  getAvailableLocais: getAvailableLocais,
  getNewLocais: getNewLocais,
  getUser: getUser,
  getLocais: getLocais,
  login: login,
  setLocais: setLocais,
  setUser: setUser,
  updateLocais: updateLocais
};