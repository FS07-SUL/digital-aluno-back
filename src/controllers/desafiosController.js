const { executarSQL } = require("../database")

async function criarDesafio(dados) {
    try {
        const date = new Date().toISOString()

        if(!dados.desafio_titulo || dados.desafio_titulo == "") {
            throw new Error("O campo desafio_titulo é obrigatório")
        }

        if(!dados.desafio_descricao || dados.desafio_descricao == "") {
            throw new Error("O campo desafio_descricao é obrigatório")
        }

        if(!dados.desafio || dados.desafio == "") {
            throw new Error("O campo desafio é obrigatório")
        }

        if(!dados.desafio_stack || dados.desafio_stack == "") {
            throw new Error("O campo desafio_stack é obrigatório")
        }

        if(!dados.desafio_dificuldade || dados.desafio_dificuldade == "") {
            throw new error("O campo desafio_dificuldade é obrigatório")
        }

        if(!dados.curso_id || dados.curso_id == "") {
            throw new Error("O campo curso_id é obrigatório")
        }

        const result = await executarSQL(`
            INSERT INTO desafios (desafio_titulo, desafio_descricao, desafio, desafio_stack, desafio_dificuldade curso_id, criado_em)
            VALUES (
                "${dados.desafio_titulo}",
                "${dados.desafio_descricao}", 
                "${dados.desafio}",
                "${dados.desafio_stack}",
                "${dados.desafio_dificuldade}",
                "${dados.curso_id}", 
                "${date}"
            );
        `)

        if(result.affectedRows == 0) {
            return {
                severity: "warn",
                detail: "Ocorreu um erro ao criar o desafio"
            }
        }

        return {
            severity: "success",
            detail: "Desafio inserido com sucesso"
        }

    } catch (error) {
        return {
            severity: "error",
            detail: error.message
        }
    }
}

async function listarDesafios() {
    try {
        return await executarSQL("SELECT * FROM desafios;")
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarDesafio(id) {
    try {
        return await executarSQL(`SELECT * FROM desafios WHERE desafio_id = ${id};`)
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function listarDesafiosPorCurso(id) {
    try {
        return await executarSQL(`SELECT * FROM desafios WHERE curso_id = ${id};`)
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function editarDesafio(id, dados) {
    try {
        const date = new Date().toISOString()

        if(!dados.desafio_titulo || dados.desafio_titulo == "") {
            throw new Error("O campo desafio_titulo é obrigatório")
        }

        if(!dados.desafio_descricao || dados.desafio_descricao == "") {
            throw new Error("O campo desafio_descricao é obrigatório")
        }

        if(!dados.desafio || dados.desafio == "") {
            throw new Error("O campo desafio é obrigatório")            
        }

        if(!dados.desafio_stack || dados.desafio_stack == "") {
            throw new Error("O campo desafio_stack é obrigatório")
        }

        if(!dados.desafio_dificuldade || dados.desafio_dificuldade == "") {
            throw new error("O campo desafio_dificuldade é obrigatório")
        }

        if(!dados.curso_id || dados.curso_id == "") {
            throw new Error("O campo curso_id é obrigatório")
        }

        const result = await executarSQL(`
            UPDATE desafios 
            SET 
                desafio_titulo = ${dados.desafio_titulo}, 
                desafio_descricao = ${dados.desafio_descricao}, 
                desafio = ${dados.desafio},
                desafio_stack = ${dados.desafio_stack},
                desafio_dificuldade = ${dados.desafio_dificuldade},
                curso_id = ${dados.curso_id},
                atualizado_em = ${date}
            WHERE curso_id = ${id};
        `)

    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

async function deletarDesafio(id) {
    try {
        if(!id || id == "") {
            throw new Error("O campo id é obrigatório")
        }

        const result = await executarSQL(`DELETE FROM desafios WHERE curso_id = ${id};`)

        if(result.affectedRows == 0) {
            return {
                severity: "warn",
                detail: "Ocorreu um erro ao deletar o desafio"
            }
        }

        return {
            severity: "success",
            detail: "Desafio deletado com sucesso"
        }
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