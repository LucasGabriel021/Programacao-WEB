const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('index.html');
});

app.use(express.urlencoded({extended: true}));

app.post('/dados', function(req,res){
    let usuario = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        data: req.body.dta
    };
    res.render('dados.html', {usuario});
});

const PORT = 8080;

app.listen(PORT, function(){
    console.log("App esta rodando na porta: ", PORT);
});
