// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

// um ternario que faz uma verificação se está em producao, se estiver define o caminho .env se não for igual a producao env.dev pois só tem 2 ambientes, ou de produção ou de desenvolvimento. 

//  sintaxe do ternario é condição ? valor_se_verdadeiro : valor_se_falso


require('dotenv').config({ path: caminho_env});

var express = require('express');
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;


// variavel que estou criando de rota


var mainRouter = require('./src/routes/main.js')
// const mainRoutess = require('./routes/main');





var app = express();

var indexRouter = require('./src/routes/index');
var usuarioRouter = require('./src/routes/usuarios');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use('/index', indexRouter);
app.use('/usuarios' , usuarioRouter);



//meu app.use
app.use("/main",mainRouter);
// app.use('/cadastrarQuiz', mainRouter);



app.listen(PORTA_APP, function (){
    console.log(`
        ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
        ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
        ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
        ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
        #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
        ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
        ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
        \n\n\n                                                                                                 
        Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
        Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
        \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
        \tSe .:producao:. você está se conectando ao banco remoto. \n\n
        \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});