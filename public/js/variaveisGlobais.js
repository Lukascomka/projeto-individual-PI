// export const dash = document.querySelector(".dash");
// export const div_escolha = document.querySelector(".conteudo_options_console");

// export const cards = document.querySelector(".cards");

// export let nome = "Jogador";


const respostaCerta = [
    {
        plataforma: 'playstation',
        respostas: [
            "Kratos",
            "Nathan Drake",
            "The last of Us",
            "Horizon Zero Dawn",
            "Detroit: Become Human",
            "Watch Dogs",
            "Red dead Redemption 2",
            "True Crime",
            "Need For speed Most Wanted",
            "Bully"
        ]
    },
    {
        plataforma: 'xbox',
        respostas: [
            "Master Chief",
            "Forza Horizon",
            "Hellblade: Senua's Sacrifice",
            "Gears of War",
            "Minecraft",
            "Conker's Bad Fur Day",
            "Kameo: Elements of Power",
            "Fable",
            "Quantum Break",
            "Cuphead"
        ]
    },
    {
        plataforma: 'fliperama',
        respostas: [
            "Ryu",
            "Mortal Kombat",
            "F-Zero",
            "Donkey Kong",
            "Final Fight",
            "Fatal Fury",
            "Super Hang-On",
            "Pac-Man",
            "Metal Slug",
            "Ghosts 'n Goblins"
        ]
    }
];

const nomeUsuario = [];
const QtdErros = [];
const QtdAcertos = [];
const tipodeQuiz = [];
const Fliperama = [];
const Xbox = [];
const Playstation = [];

let myChart = null;
let myChart2 = null;

let porcentagemFinalDeAcertos = 0;
let pontuacaoFinal = 0;
let quantidadeDeQuestoes = 10;
let tentativaIncorreta = 0;
let RespostaCorreta = 0;
let RespostaErrada = 0;
let respostaUsuario = [];


window.respostaCerta = respostaCerta;
window.nomeUsuario = nomeUsuario;
window.QtdErros = QtdErros;
window.QtdAcertos = QtdAcertos;
window.tipodeQuiz = tipodeQuiz;
window.Fliperama = Fliperama;
window.Xbox = Xbox;
window.Playstation = Playstation;
window.porcentagemFinalDeAcertos = porcentagemFinalDeAcertos
window.pontuacaoFinal = pontuacaoFinal
window.quantidadeDeQuestoes = quantidadeDeQuestoes
window.tentativaIncorreta = tentativaIncorreta;
window.RespostaCorreta = RespostaCorreta;
window.RespostaErrada = RespostaErrada;
window.respostaUsuario = respostaUsuario



 

