const mysql = require("mysql2/promise");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function executarSQL(sql){
    const conexao = await mysql.createConnection({
        host: 'reforcodev.com',
        user: 'refo9178_FS07SUL_USER',
        password: 'FS07SUL@123',
        database: 'refo9178_FS07SUL'
    });

    const [ result ] = await conexao.query(sql);

    conexao.end();

    return result;
}

module.exports = {
    executarSQL,
    prisma
}