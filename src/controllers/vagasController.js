
const { prisma } = require("../database");

async function listarVagas(){
    try {
        return await prisma.vagas.findMany();
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function listarVaga(id){
    try {
        return await prisma.vagas.findUnique({
            where: {
                vaga_id: Number(id)
            }
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function criarVaga(dados){
    try {
        return await prisma.vagas.create({
            data: dados
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function editarVaga(id, dados){
    try {
        return await prisma.vagas.update({
            where: {
                vaga_id: Number(id)
            },
            data: dados
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function deletarVaga(id){
    try {
        return await prisma.vagas.delete({
            where: {
                vaga_id: Number(id)
            }
        });
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

module.exports = {
    listarVagas,
    listarVaga,
    criarVaga,
    editarVaga,
    deletarVaga
}