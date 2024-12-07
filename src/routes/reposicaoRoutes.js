const { criarReposicao, listarReposicoes, listarReposicao, editarReposicao, deletarReposicao } = require("../controllers/reposicaoController")

const router = require("express").Router()

router.post("/", async (req, res) => {
    res.send(await criarReposicao(req.body))
})

router.get("/", async (req, res) => {
    res.send(await listarReposicoes())
})

router.get("/:id", async (req, res) => {
    res.send(await listarReposicao(req.params.id))
})

router.post("/:id", async (req, res) => {
    res.send(await editarReposicao(req.params.id, req.body))
})

router.delete("/:id", async (req, res) => {
    res.send(await deletarReposicao(req.params.id))
})

module.exports = router