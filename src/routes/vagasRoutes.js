const { listarVagas, listarVaga, criarVaga, editarVaga, deletarVaga } = require("../controllers/vagasController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await listarVagas());
});
router.get("/:id", async (req, res) => {
    res.send(await listarVaga(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await criarVaga(req.body));
});
router.patch("/:id", async (req, res) => {
    res.send(await editarVaga(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
    res.send(await deletarVaga(req.params.id));
});

module.exports = router;