const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const PORT = 8080;

// Renderizar HTML com o Mustache
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express. urlencoded());

app.get("/formulario", (req, res) => {
    res.render("index.html");

});

const dados = []

app.post("/precessar_dados", (req, res) => {
    const {nome, endereco, telefone, dataAgendamento} = req.body;
    // console.log(nome, endereco, telefone, dataAgendamento);

    console.log(dataAgendamento);
    function formatarData(data) {
        const partesData = data.split("-");
        if(partesData.length === 3) {
            // const {ano, mes, dia} = partesData;
            const ano = partesData[0];
            const mes = partesData[1];
            const dia = partesData[2];
            return `${dia}/${mes}/${ano}`;
        }
        return data;
    }

    const dataBr = formatarData(dataAgendamento);

    dados.push({ nome, endereco, telefone, dataBr });
    console.log(dados);

    res.render("dados.html", {dados});
});

app.listen(PORT, () => {
    console.log("Porta: " + PORT);
});