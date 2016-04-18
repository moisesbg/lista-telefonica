var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var contatos = [
	{ id: 1, nome: "bruno da silva",  telefone: "9999-2222", data: new Date(1982,3,12), operadora: {nome: "Oi",   codigo: 14, categoria: "Celular"}},
	{ id: 2, nome: "SANDRA MARIA",    telefone: "9999-3333", data: new Date(1985,8,29), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{ id: 3, nome: "Mariana MACHADO", telefone: "9999-9999", data: new Date(1976,1,27), operadora: {nome: "Tim",  codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});
app.get('/contatos/:id', function(req, res) {
  var indice = parseInt(req.params.id) - 1;
  res.json(contatos[indice]);
});

app.post('/contatos', function(req, res) {
  contato = req.body;
  contato.id =  contatos.length > 0 ? contatos[contatos.length - 1].id + 1 : 1;
  contatos.push(contato);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});