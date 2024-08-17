const { executarSQL } = require("../database");
// const { editarMaterial } = require("./materialController");

async function listarMateriais() {
    try {        
        return await executarSQL(`SELECT * FROM materiais;`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function listarMaterialporCurso(id) {
    try {
        if (!id || id == "") {
            throw new Error("Campo id_curso é obrigatório")
        }
        return await executarSQL(`SELECT * FROM materiais WHERE curso_id = ${id};`);
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarMaterial(id) {
    try {
        if (!id || id == "") {
            throw new Error("Campo id_curso é obrigatório")
        }
        return await executarSQL(`SELECT * FROM materiais WHERE material_id = ${id};`);

    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}
async function criarMaterial(dados) {
    try {
        if (dados.material_nome == '' || !dados.material_nome) {
            throw new Error("O campo material_titulo é obrigatorio!")
        }

        if (dados.material_link == '' || !dados.material_link) {
            throw new Error("O campo material_link é obrigatorio!")
        }

        if (dados.curso_id == '' || !dados.curso_id) {
            throw new Error("O campo curso_id é obrigatorio!")
        }

        const result = await executarSQL(`INSERT INTO materiais (material_nome, material_link, curso_id) VALUES ('${dados.material_nome}','${dados.material_link}','${dados.curso_id}')`)

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
async function editarMaterial(id, dados) {
    try {
        if (!id || id == "") {
            throw new Error("Campo id_curso é obrigatório")
        }
        if (dados.material_nome == '' || !dados.material_nome) {
            throw new Error("O campo material_titulo é obrigatorio!")
        }

        if (dados.material_link == '' || !dados.material_link) {
            throw new Error("O campo material_link é obrigatorio!")
        }

        if (dados.curso_id == '' || !dados.curso_id) {
            throw new Error("O campo curso_id é obrigatorio!")
        }

        const result = await executarSQL(`UPDATE materiais SET material_nome = '${dados.material_nome}', material_link = '${dados.material_link}', curso_id = '${dados.curso_id}'  WHERE material_id = ${id}`)
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
async function deletarMaterial(id) {
    try {
        if (!id || id == "") {
            throw new Error("Campo id_curso é obrigatório")
        }
        const result = await executarSQL(`DELETE FROM materiais WHERE material_id = ${id}`);
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
    listarMaterial,
    listarMaterialporCurso,
    listarMateriais,
    criarMaterial,
    editarMaterial,
    deletarMaterial
}