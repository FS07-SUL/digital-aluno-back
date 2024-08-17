const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./src/routes/usuarioRoutes");
const vagasRoutes = require("./src/routes/vagasRoutes");
const cursosRoutes = require("./src/routes/cursosRoutes");
const materiaisRoutes = require("./src/routes/materialRoutes");

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World");
})

// ROTAS PROTEGIDAS
app.use("/vagas", vagasRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/cursos", cursosRoutes);
app.use("/materiais", materiaisRoutes);


app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
})