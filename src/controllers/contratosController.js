const { prisma } = require("../database");


async function listarContratos() {
    try {        
        return await prisma.contratos.findMany();
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function listarContratoporUsuario(id) {
    try {
        if (!id || id == "") {
            throw new Error("Campo Usuario_id é obrigatório")
        }
        return await prisma.contratos.findMany({
            where:{
                usuario_id: Number(id)
            }
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarUmContrato(id) {
    try {
        if (!id || id == "") {
            throw new Error("Campo Usuario_id é obrigatório")
        }
        return await prisma.contratos.findMany({
            where:{
                contrato_id: Number(id)
            }
        })
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}


async function criarContrato(dados) {
    try {
        if (dados.contrato_titulo == '' || !dados.contrato_titulo) {
            throw new Error("O campo contrato_titulo é obrigatorio!")
        }

        if (dados.contrato_link == '' || !dados.contrato_link) {
            throw new Error("O campo contrato_link é obrigatorio!")
        }

        if (dados.usuario_id == '' || !dados.usuario_id) {
            throw new Error("O campo usuario_id é obrigatorio!")
        }

        const result = await prisma.contratos.create({
            data:dados
        })

        if (result.affected_rows == 0) {
            return {
                severity: 'error',
                detail: 'ocorreu um erro'
            }
        }
        return {
            severity: 'success',
            detail: 'Dados inseridos com sucesso'
        }
    } catch (error) {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}
async function editarContrato(id, dados) {
    try {
        if (!id || id == "") {
            throw new Error("Campo contrato_id é obrigatório")
        }
        if (dados.contrato_titulo == '' || !dados.contrato_titulo) {
            throw new Error("O campo contrato_titulo é obrigatorio!")
        }

        if (dados.contrato_link == '' || !dados.contrato_link) {
            throw new Error("O campo contrato_link é obrigatorio!")
        }

        if (dados.usuario_id == '' || !dados.usuario_id) {
            throw new Error("O campo usuario_id é obrigatorio!")
        }

        const result = await prisma.contratos.update({
            where:{
                contrato_id: Number(id)
            },
            data: dados
        })
        return {
            severity: 'success',
            detail: 'Dados editados com sucesso'
        }
    } catch (error) {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}
async function deletarContrato(id) {
    try {
        if (!id || id == "") {
            throw new Error("Campo contrato_id é obrigatório")
        }
        const result = await prisma.contratos.delete({
            where:{
                contrato_id: Number(id)
            }
        })
        return {
            severity: 'success',
            detail: 'Dados deletados com sucesso'
        }

    } catch (error) {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}

module.exports = {
   listarContratos,
   listarContratoporUsuario,
   criarContrato,
   editarContrato,
   deletarContrato,
   listarUmContrato
}