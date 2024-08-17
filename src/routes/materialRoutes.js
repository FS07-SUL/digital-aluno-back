const { listarMaterial,listarMaterialporCurso,criarMaterial,editarMaterial,deletarMaterial, listarMateriais } = require("../controllers/materialController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await listarMateriais());
});
router.get("/curso/:id", async (req, res) => {
    res.send(await listarMaterialporCurso(req.params.id));
});
router.get("/:id", async (req, res) => {
    res.send(await listarMaterial(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await criarMaterial(req.body));
});
router.post("/:id", async (req, res) => {
    res.send(await editarMaterial(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
    res.send(await deletarMaterial(req.params.id));
});

module.exports = router;