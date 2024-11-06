const express = require("express");
const path = require("path");
const app = express();

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Rotas para categorias e produtos
const alunoRouter = require("./routes/aluno");
app.use("/aluno", alunoRouter);


const qsRouter = require("./routes/quemsomos");
app.use("/quemsomos", qsRouter);

// Configurar a pasta pública para arquivos estáticos
app.use(express.static('public'));

// Iniciar o servidor e sincronizar com o banco de dados

app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000");
});
