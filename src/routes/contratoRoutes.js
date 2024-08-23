const { listarContratos, listarContratoporUsuario, criarContrato, editarContrato, deletarContrato, listarUmContrato } = require("../controllers/contratosController");


const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await listarContratos());
});
router.get("/usuario/:id", async (req, res) => {
    res.send(await listarContratoporUsuario(req.params.id));
});
router.get("/:id", async (req, res) => {
    res.send(await listarUmContrato(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await criarContrato(req.body));
});
router.post("/:id", async (req, res) => {
    res.send(await editarContrato(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
    res.send(await deletarContrato(req.params.id));
});

module.exports = router;