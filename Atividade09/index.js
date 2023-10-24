// Importar
const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const PORT = 8080;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/src/views");

app.use(express.urlencoded({extended: true}));

app.use("/", require("./src/routes/calculadoraRoutes"));

// Ouvinte
app.listen(PORT, () => {
    console.log("App na porta: ", PORT);
});