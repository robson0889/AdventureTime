const sql = require("mssql");
const crypto = require("crypto");

let connection;

const settings = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

function login(req, res){
  const user = req.body.user;
  const pass = req.body.pass;
  
  new sql.ConnectionPool(settings).connect()
  .then((pool) => {
    connection = pool;
    return connection.request().query(`SELECT nome, senha FROM TbUsuario WHERE noem = ${user}`);
  })
  .then((rows) => {
    const isLogged = (hasher(pass) === rows.recordset[0].senha);
	const statusToSend = isLogged ? 200 : 403;

	res.writeHead(statusToSend, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"isLogged": isLogged}));
  });
}

function hasher(plainText=""){
  return crypto.createHash('md5').update(plainText).digest('hex');
}

module.exports = {
  login: login
};