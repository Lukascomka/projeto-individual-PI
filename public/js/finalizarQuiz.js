
function fimQuizPlaystation() {
    let RespostaCorreta = 0;
    let RespostaErrada = 0;
    let pontuacaoLocalQuiz = 0;
    let respostaUsuarioAtual = [];


    let respostaGrupo1 = window.respostaGrupoPlaystation1?.value || '';
    let respostaGrupo2 = window.respostaGrupoPlaystation2?.value || '';
    let respostaGrupo3 = window.respostaGrupoPlaystation3?.value || '';
    let respostaGrupo4 = window.respostaGrupoPlaystation4?.value || '';
    let respostaGrupo5 = window.respostaGrupoPlaystation5?.value || '';
    let respostaGrupo6 = window.respostaGrupoPlaystation6?.value || '';
    let respostaGrupo7 = window.respostaGrupoPlaystation7?.value || '';
    let respostaGrupo8 = window.respostaGrupoPlaystation8?.value || '';
    let respostaGrupo9 = window.respostaGrupoPlaystation9?.value || '';
    let respostaGrupo10 = window.respostaGrupoPlaystation10?.value || '';

    respostaUsuarioAtual.push(
        respostaGrupo1, respostaGrupo2, respostaGrupo3, respostaGrupo4, respostaGrupo5,
        respostaGrupo6, respostaGrupo7, respostaGrupo8, respostaGrupo9, respostaGrupo10
    );

    let respostasCorretasDestaPlataforma = [];
    for (let i = 0; i < window.respostaCerta.length; i++) {
        if (window.respostaCerta[i].plataforma == 'playstation') {
            respostasCorretasDestaPlataforma = window.respostaCerta[i].respostas;
            break;
        }
    }

    for (let j = 0; j < respostaUsuarioAtual.length; j++) {
        const respostaEsperada = respostasCorretasDestaPlataforma[j]?.toLowerCase().trim() || '';
        const respostaDada = respostaUsuarioAtual[j]?.toLowerCase().trim() || '';

        if (respostaEsperada === respostaDada) {
            RespostaCorreta++;
            pontuacaoLocalQuiz++;
        } else {
            RespostaErrada++;
            window.tentativaIncorreta++;
        }
    }

    let porcentagemFInalDeAcertosDoQuiz = RespostaCorreta / window.quantidadeDeQuestoes;

    window.porcentagemFinalDeAcertos = porcentagemFInalDeAcertosDoQuiz;
    window.pontuacaoFinal = pontuacaoLocalQuiz;

    let porcentagemTexto = Math.round(porcentagemFInalDeAcertosDoQuiz * 110);

    if (porcentagemFInalDeAcertosDoQuiz <= 0.3) {
        prompt(`Game Over!\nVocê acertou ${porcentagemTexto}% das questões`);
    } else if (porcentagemFInalDeAcertosDoQuiz > 0.3 && porcentagemFInalDeAcertosDoQuiz < 0.9) {
        prompt(`Tem que upar mais o seu personagem \nVocê acertou ${porcentagemTexto}% das questões`);
    } else if (porcentagemFInalDeAcertosDoQuiz >= 0.9) {
        prompt(`Você tem evoluido constantemente, parabéns!\nVocê acertou ${porcentagemTexto}% das questões`);
    }

    fetch("/quiz", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            RespostaCorreta: RespostaCorreta,
            RespostaErrada: RespostaErrada,
            id_usuario: sessionStorage.getItem('ID_USUARIO'),
            Fkid_Quiz: Number(sessionStorage.getItem('Selected_QUIZ_ID')) || 1
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                console.log("Quiz feito pelo usuario enviado com sucesso para o backend");
            } else {
                resposta.json().then(errorData => {
                    console.error("Erro ao enviar quiz para o back end", errorData);
                }).catch(() => {
                    console.error("Erro ao enviar quiz para o backend. Status do erro: ", resposta.status);
                });
            }
        })
        .catch(function (erro) {
            console.log(`#ERRO: ${erro}`);
        });
}

function fimQuizXbox() {
    let RespostaCorreta = 0;
    let RespostaErrada = 0;
    let pontuacaoLocalQuiz = 0;
    let respostaUsuarioAtual = [];

    let respostaXbox1 = window.respostaGrupoXbox1?.value || '';
    let respostaXbox2 = window.respostaGrupoXbox2?.value || '';
    let respostaXbox3 = window.respostaGrupoXbox3?.value || '';
    let respostaXbox4 = window.respostaGrupoXbox4?.value || '';
    let respostaXbox5 = window.respostaGrupoXbox5?.value || '';
    let respostaXbox6 = window.respostaGrupoXbox6?.value || '';
    let respostaXbox7 = window.respostaGrupoXbox7?.value || '';
    let respostaXbox8 = window.respostaGrupoXbox8?.value || '';
    let respostaXbox9 = window.respostaGrupoXbox9?.value || '';
    let respostaXbox10 = window.respostaGrupoXbox10?.value || '';

    respostaUsuarioAtual.push(
        respostaXbox1, respostaXbox2, respostaXbox3, respostaXbox4, respostaXbox5,
        respostaXbox6, respostaXbox7, respostaXbox8, respostaXbox9, respostaXbox10
    );

    let respostasCorretasDestaPlataforma = [];
    for (let i = 0; i < window.respostaCerta.length; i++) {
        if (window.respostaCerta[i].plataforma == 'xbox') {
            respostasCorretasDestaPlataforma = window.respostaCerta[i].respostas;
            break;
        }
    }

    for (let j = 0; j < respostaUsuarioAtual.length; j++) {
        const respostaEsperada = respostasCorretasDestaPlataforma[j]?.toLowerCase().trim() || '';
        const respostaDada = respostaUsuarioAtual[j]?.toLowerCase().trim() || '';

        if (respostaEsperada === respostaDada) {
            RespostaCorreta++;
            pontuacaoLocalQuiz++;
        } else {
            RespostaErrada++;
            window.tentativaIncorreta++;
        }
    }

    let porcentagemFInalDeAcertosDoQuiz = RespostaCorreta / window.quantidadeDeQuestoes;
    window.porcentagemFinalDeAcertos = porcentagemFInalDeAcertosDoQuiz;
    window.pontuacaoFinal = pontuacaoLocalQuiz;

    let porcentagemTexto = Math.round(porcentagemFInalDeAcertosDoQuiz * 100);

    if (porcentagemFInalDeAcertosDoQuiz <= 0.3) {
        prompt(`Game Over!\nVocê acertou ${porcentagemTexto}% das questões`);
    } else if (porcentagemFInalDeAcertosDoQuiz > 0.3 && porcentagemFInalDeAcertosDoQuiz < 0.9) {
        prompt(`Tem que upar mais o seu personagem \nVocê acertou ${porcentagemTexto}% das questões`);
    } else if (porcentagemFInalDeAcertosDoQuiz >= 0.9) {
        prompt(`Você tem evoluido constantemente, parabéns!\nVocê acertou ${porcentagemTexto}% das questões`);
    }

    fetch("/quiz", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            RespostaCorreta: RespostaCorreta,
            RespostaErrada: RespostaErrada,
            id_usuario: sessionStorage.getItem('ID_USUARIO'),
            Fkid_Quiz: Number(sessionStorage.getItem('Selected_QUIZ_ID')) || 2
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                console.log("Quiz feito pelo usuario enviado com sucesso para o backend");
            } else {
                resposta.json().then(errorData => {
                    console.error("Erro ao enviar quiz para o back end", errorData);
                }).catch(() => {
                    console.error("Erro ao enviar quiz para o backend. Status do erro: ", resposta.status);
                });
            }
        })
        .catch(function (erro) {
            console.log(`#ERRO: ${erro}`);
        });
}

function fimQuizFliperama() {
    let RespostaCorreta = 0;
    let RespostaErrada = 0;
    let pontuacaoLocalQuiz = 0;
    let respostaUsuarioAtual = [];

    let respostaFliperama1 = window.respostaGrupoFliperama1?.value || '';
    let respostaFliperama2 = window.respostaGrupoFliperama2?.value || '';
    let respostaFliperama3 = window.respostaGrupoFliperama3?.value || '';
    let respostaFliperama4 = window.respostaGrupoFliperama4?.value || '';
    let respostaFliperama5 = window.respostaGrupoFliperama5?.value || '';
    let respostaFliperama6 = window.respostaGrupoFliperama6?.value || '';
    let respostaFliperama7 = window.respostaGrupoFliperama7?.value || '';
    let respostaFliperama8 = window.respostaGrupoFliperama8?.value || '';
    let respostaFliperama9 = window.respostaGrupoFliperama9?.value || '';
    let respostaFliperama10 = window.respostaGrupoFliperama10?.value || '';

    respostaUsuarioAtual.push(
        respostaFliperama1, respostaFliperama2, respostaFliperama3, respostaFliperama4, respostaFliperama5,
        respostaFliperama6, respostaFliperama7, respostaFliperama8, respostaFliperama9, respostaFliperama10
    );

    let respostasCorretasDestaPlataforma = [];
    for (let i = 0; i < window.respostaCerta.length; i++) {
        if (window.respostaCerta[i].plataforma == 'fliperama') {
            respostasCorretasDestaPlataforma = window.respostaCerta[i].respostas;
            break;
        }
    }

    for (let j = 0; j < respostaUsuarioAtual.length; j++) {
        const respostaEsperada = respostasCorretasDestaPlataforma[j]?.toLowerCase().trim() || '';
        const respostaDada = respostaUsuarioAtual[j]?.toLowerCase().trim() || '';

        if (respostaEsperada === respostaDada) {
            RespostaCorreta++;
            pontuacaoLocalQuiz++;
        } else {
            RespostaErrada++;
            window.tentativaIncorreta++;
        }
    }

    let porcentagemFInalDeAcertosDoQuiz = RespostaCorreta / window.quantidadeDeQuestoes;
window.porcentagemFinalDeAcertos = porcentagemFInalDeAcertosDoQuiz;
window.pontuacaoFinal = pontuacaoLocalQuiz;

let porcentagemTexto = Math.round((porcentagemFInalDeAcertosDoQuiz /10)*100);

if (Math.abs(porcentagemFInalDeAcertosDoQuiz - 1) < 0.0001) {
    prompt(`Você tem evoluído constantemente, parabéns!\nVocê acertou 100% das questões`);
} else if (porcentagemFInalDeAcertosDoQuiz <= 0.3) {
    prompt(`Game Over!\nVocê acertou ${porcentagemTexto}% das questões`);
} else if (porcentagemFInalDeAcertosDoQuiz > 0.3 && porcentagemFInalDeAcertosDoQuiz < 0.9) {
    prompt(`Tem que upar mais o seu personagem\nVocê acertou ${porcentagemTexto}% das questões`);
} else if (porcentagemFInalDeAcertosDoQuiz >= 0.9) {
    prompt(`Você tem evoluído constantemente, parabéns!\nVocê acertou ${porcentagemTexto}% das questões`);
}else 




    fetch("/quiz", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            RespostaCorreta: RespostaCorreta,
            RespostaErrada: RespostaErrada,
            id_usuario: sessionStorage.getItem('ID_USUARIO'),
            Fkid_Quiz: Number(sessionStorage.getItem('Selected_QUIZ_ID')) || 3
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                console.log("Quiz feito pelo usuario enviado com sucesso para o backend");
            } else {
                resposta.json().then(errorData => {
                    console.error("Erro ao enviar quiz para o back end", errorData);
                }).catch(() => {
                    console.error("Erro ao enviar quiz para o backend. Status do erro: ", resposta.status);
                });
            }
        })
        .catch(function (erro) {
            console.log(`#ERRO: ${erro}`);
        });
}

window.fimQuizPlaystation = fimQuizPlaystation;
window.fimQuizXbox = fimQuizXbox;
window.fimQuizFliperama = fimQuizFliperama;