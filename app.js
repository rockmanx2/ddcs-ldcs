const http = require('http');

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var hostname = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var path = require('path'),    
	express = require('express');
	app = express();

app.listen(port);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res) {
	res.send('Olá! :)');
});

app.get('/pergunta-lucro-real', function(req, res) {
		filePath = path.join(__dirname, 'pergunta_lucro_real.json');
		var jsonfile = require('jsonfile');
		jsonfile.readFile(filePath,'utf-8', function(err,data){
			if (!err) {
				res.json(data);
			} else {
				res.status(500).send(err);
			}});
});

app.get('/pergunta-lei-12973', function(req, res) {
		filePath = path.join(__dirname, 'pergunta_lei_12973.json');
		var jsonfile = require('jsonfile');
		jsonfile.readFile(filePath,'utf-8', function(err,data){
			if (!err) {
				res.json(data);
			} else {
				res.status(500).send(err);
			}});
});

app.get('/pergunta-provisoes-temporarias', function(req, res) {
		filePath = path.join(__dirname, 'pergunta_provisoes_temporarias.json');
		var jsonfile = require('jsonfile');
		jsonfile.readFile(filePath,'utf-8', function(err,data){
			if (!err) {
				res.json(data);
			} else {
				res.status(500).send(err);
			}});
});

app.get('/pergunta-beneficios-fiscais', function(req, res) {
		filePath = path.join(__dirname, 'pergunta_beneficios_fiscais.json');
		var jsonfile = require('jsonfile');
		jsonfile.readFile(filePath,'utf-8', function(err,data){
			if (!err) {
				res.json(data);
			} else {
				res.status(500).send(err);
			}});
});

app.get('/pergunta-lucro-exploracao', function(req, res) {
		filePath = path.join(__dirname, 'pergunta_lucro_exploracao.json');
		var jsonfile = require('jsonfile');
		jsonfile.readFile(filePath,'utf-8', function(err,data){
			if (!err) {
				res.json(data);
			} else {
				res.status(500).send(err);
			}});
});

app.get('/pergunta-obrigacao-acessorias', function(req, res) {
		filePath = path.join(__dirname, 'pergunta_obrigacao_acessorias.json');
		var jsonfile = require('jsonfile');
		jsonfile.readFile(filePath,'utf-8', function(err,data){
			if (!err) {
				res.json(data);
			} else {
				res.status(500).send(err);
			}});
});

