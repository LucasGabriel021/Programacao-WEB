const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const PORT = 8080;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/:nome", (req, res) => {
    let nome = req.params.nome;
    res.render("index.html", {nome});
});

app.listen(PORT, () => {
    console.log("App PORTA: " + PORT);
}); 