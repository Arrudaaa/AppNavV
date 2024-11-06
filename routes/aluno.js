const express = require("express");
const router = express.Router();

// Listar categorias
router.get("/", async (req, res) => {
  res.render("base", {
    title: "Alunos",
    view: "aluno/show",
  });
});

// Formulário para adicionar categoria
router.get("/add",  (req, res) => {
  res.render("base", {
    title: "Add Aluno",
    view: "aluno/add",
  });
});

// Formulário para editar categoria
router.get("/edit", async (req, res) => {

  res.render("base", {
    title: "Editar Aluno",
    view: "aluno/edit",

  });
});

module.exports = router;
