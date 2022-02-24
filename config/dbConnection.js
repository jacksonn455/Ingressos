const mongoose = require("mongoose");
const { DB_ADDR, DB_USER, DB_PASS} = process.env;
const CON = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_ADDR}.czbld.mongodb.net/test`;

var connMongo = mongoose
  .connect(CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conexão com MongoDB realizada com sucesso");
  })
  .catch((erro) => {
    console.log(DB_ADDR);
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso");
    console.log(erro);
  });

module.exports = connMongo;
