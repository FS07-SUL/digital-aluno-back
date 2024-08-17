// const { sendMail } = require("../controllers/mailController");
const { listarUsuario, listarUsuarios, criarUsuario, editarUsuario, deletarUsuario, logarUsuario, recuperarSenhaUsuario } = require("../controllers/usuarioController");

const router = require("express").Router();

router.post('/login', async (req, res) => {
    res.send(await logarUsuario(req.body));
});

router.get("/", async (req, res) => {
    res.send(await listarUsuarios());
});
router.get("/:id", async (req, res) => {
    res.send(await listarUsuario(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
});
router.patch("/:id", async (req, res) => {
    res.send(await editarUsuario(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
    res.send(await deletarUsuario(req.params.id));
});

router.post('/recuperar', async (req, res) => {
    res.send(await recuperarSenhaUsuario(req.body));
});

// router.post('/send', sendMail)

module.exports = router;
