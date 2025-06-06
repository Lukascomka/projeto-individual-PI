function plotarGraficoPizza(dados) {
    const ctx = document.getElementById('myChart');
    const nomeUsuarioAtual = dados[0].nome;
    const totalAcertosUsuarioAtual = dados[0].total_acertos;
    const totalErrosUsuarioAtual = dados[0].total_erros;

    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Resposta Certa', 'Resposta Errada'],
            datasets: [{
                label: 'Seus acertos e erros',
                data: [totalAcertosUsuarioAtual, totalErrosUsuarioAtual],
                backgroundColor: ['rgb(16, 124, 16)', 'black'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Gráfico de acertos e erros'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function plotarGraficoBarra(dados) {
    const ctx2 = document.getElementById('myChart2');

    myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: tipodeQuiz.slice(0, 3),
            datasets: [{
                label: 'Média geral de todos os jogadores',
                data: QtdAcertos.slice(0, 3),
                backgroundColor: [
                    'RGB(218, 41, 28)', 
                    'rgb(16, 124, 16)', 
                    'RGB(0, 255, 255)'  
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Ranking de acerto entre os jogadores'
                }
            }
        }
    });
}
