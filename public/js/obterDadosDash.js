function obterDadosParaQuiz() {
    fetch('/main/obterDados')
        .then(response => response.json())
        .then(data => {
            nomeUsuario = [];
            QtdErros = [];
            QtdAcertos = [];
            tipodeQuiz = [];
            Fliperama = [];
            Xbox = [];
            Playstation = [];

            for (let i = 0; i < data.length; i++) {
                if (data[i].total_acertos && data[i].total_erros && data[i].tipodeQuiz) {
                    QtdAcertos.push(data[i].total_acertos);
                    QtdErros.push(data[i].total_erros);
                    tipodeQuiz.push(data[i].tipodeQuiz);

                    if (data[i].tipodeQuiz === 'fliperama') {
                        Fliperama.push(data[i].tipodeQuiz);
                    } else if (data[i].tipodeQuiz === 'playstation') {
                        Playstation.push(data[i].tipodeQuiz);
                    } else if (data[i].tipodeQuiz === 'xbox') {
                        Xbox.push(data[i].tipodeQuiz);
                    }
                }
            }

            plotarGraficoBarra(data);
        })
        .catch(console.error);
}


function obterDadosParaQuizPizza(idDoQuiz) {
    fetch(`/main/obterDadosPizza/${sessionStorage.ID_USUARIO}/${idDoQuiz}`)
        .then(response => {
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data[0].nome_usuario && data[0].total_acertos && data[0].total_erros) {
                totalAcertosUsuarioAtual = [data[0].total_acertos];
                totalErrosUsuarioAtual = [data[0].total_erros];
                nomeDoUsuario = data[0].nome_usuario;
            }

            plotarGraficoPizza(data);
        })
        .catch(console.error);
}
