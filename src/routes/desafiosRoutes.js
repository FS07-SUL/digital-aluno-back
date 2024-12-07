const { criarDesafio, listarDesafios, listarDesafio, listarDesafiosPorCurso, editarDesafio, deletarDesafio } = require("../controllers/desafiosController")

const router = require("express").Router()

router.post("/", async (req, res) => {
    res.send(await criarDesafio(req.body))
})

router.get("/", async (req, res) => {
    res.send(await listarDesafios())
})

router.get("/:id", async (req, res) => {
    res.send(await listarDesafio(req.params.id))
})

router.get("/:id", async (req, res) => {
    res.send(await listarDesafiosPorCurso(req.params.id))
})

router.post("/:id", async (req, res) => {
    res.send(await editarDesafio(req.params.id, req.body))
})

router.delete("/:id", async (req, res) => {
    res.send(await deletarDesafio(req.params.id))
})

module.exports = router