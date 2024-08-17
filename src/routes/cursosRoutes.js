const { listarCursos, criarCurso, editarCurso, deletarCurso, listarCurso } = require("../controllers/cursosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(await listarCursos());
});
router.get("/:id", async (req, res) => {
  res.send(await listarCurso(req.params.id));
});
router.post("/", async (req, res) => {
  res.send(await criarCurso(req.body));
});
router.post("/:id", async (req, res) => {
  res.send(await editarCurso(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  res.send(await deletarCurso(req.params.id));
});

module.exports = router;