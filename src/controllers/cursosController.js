const { executarSQL } = require("../database");

async function listarCursos() {
  try {
    return await executarSQL('SELECT * FROM cursos;');
  } catch (error) {
    return {
      message: error.message,
      status: "error"
    }
  }
}

async function listarCurso(id) {
  try {
    return await executarSQL(`SELECT * FROM cursos WHERE curso_id = ${id};`);
  } catch (error) {
    return {
      message: error.message,
      status: "error"
    }
  }
}

async function criarCurso(dados) {
  try {
    if (!dados.curso_nome || dados.curso_nome == "") {
      throw new Error('O campo curso_nome é obrigatório');
    }
    if (!dados.curso_descricao || dados.curso_descricao == "") {
      throw new Error('O campo curso_descricao é obrigatório');
    }
    if (!dados.curso_duracao || dados.curso_duracao == "") {
      throw new Error('O campo curso_duracao é obrigatório');
    }
    const result = await executarSQL(
      `INSERT INTO cursos (curso_nome, curso_descricao, curso_duracao)
       VALUES ('${dados.curso_nome}', '${dados.curso_descricao}', '${dados.curso_duracao}');`
      );
    if (result.affectedRows == 0) {
      return {
        severity: 'warn',
        detail: 'Ocorreu um erro ao criar o curso'
      }
    }
    return {
      severity: 'success',
      detail: 'Registro inserido com sucesso'
    };
  } catch (error) {
    return {
      severity: 'error',
      detail: error.message
    }
  }
}

async function editarCurso(id, dados) {
  try {
    const data = new Date().toISOString();
    const result = await executarSQL(`UPDATE cursos SET curso_nome = '${dados.curso_nome}', curso_descricao = '${dados.curso_descricao}', curso_duracao = '${dados.curso_duracao}', atualizado_em = '${data}' WHERE curso_id = ${id}`);
    return {
      severity: 'success',
      detail: 'Registro atualizado com sucesso'
    };
  } catch (error) {
    return {
      severity: 'error',
      detail: error.message
    }
  }
}

async function deletarCurso(id) {
  try {
    if (!id || id == "") {
      throw new Error('O campo id é obrigatório');
    }
    const result = await executarSQL(`DELETE FROM cursos WHERE curso_id = ${id}`);

    if (result.affectedRows == 0) {
      return {
        severity: 'warn',
        detail: 'Ocorreu um erro ao deletar curso'
      }
    }
    return {
      severity: 'success',
      detail: 'Registro deletado com sucesso'
    };

  } catch (error) {
    return {
      severity: 'error',
      detail: error.message
    }
  }
}

module.exports = {
  listarCursos,
  listarCurso,
  criarCurso,
  editarCurso,
  deletarCurso
}