const { executarSQL } = require("../database");

async function listarVagas(){
    try {
        return await executarSQL(`SELECT * FROM vagas;`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function listarVaga(id){
    try {
        return await executarSQL(`SELECT * FROM vagas WHERE vaga_id = ${id};`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function criarVaga(dados){
    try {
        return await executarSQL(`INSERT * FROM vagas WHERE vaga_id = ${id};`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function editarVaga(id, dados){
    try {
        return await executarSQL(`UPDATE * FROM vagas WHERE vaga_id = ${id};`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function deletarVaga(id){
    try {
        return await executarSQL(`DELETE  * FROM vagas WHERE vaga_id = ${id};`);
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