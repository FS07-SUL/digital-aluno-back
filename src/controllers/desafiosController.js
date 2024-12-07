const { prisma } = require("../database")

async function criarDesafio(dados) {
    try {
        return await prisma.desafios.create({
            data: dados
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarDesafios() {
    try {
        return await prisma.desafios.findMany()
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarDesafio(id) {
    try {
        return await prisma.desafios.findUnique({
            where: {
                desafio_id: Number(id)
            }
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarDesafiosPorCurso(id) {
    try {
        return await prisma.desafios.findMany({
            where: {
                curso_id: Number(id)
         }
    })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function editarDesafio(id, dados) {
    try {
        return await prisma.desafios.update({
            where: {
                desafio_id: Number(id)
            },
            data: dados
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function deletarDesafio(id) {
    try {
        return await prisma.desafios.delete({
            where: {
                desafio_id: Number(id)
            }
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

module.exports = {
    criarDesafio,
    listarDesafios,
    listarDesafio,
    listarDesafiosPorCurso,
    editarDesafio,
    deletarDesafio
}