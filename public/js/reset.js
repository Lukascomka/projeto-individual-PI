function resetQuizVariables() {
    pontuacaoFinal = 0;
    tentativaIncorreta = 0;
    RespostaCorreta = 0;
    RespostaErrada = 0;
    respostaUsuario = [];
}

function reset() {
    if (myChart) {
        myChart.destroy();
        myChart = null;
    }
    if (myChart2) {
        myChart2.destroy();
        myChart2 = null;
    }

    msg_home.innerHTML = "";
    posts.innerHTML = "";
    class_mensagem.innerHTML = "";
    div_escolha.innerHTML = "";
    
    document.querySelector(".class-quiz").innerHTML = "";
}