
window.onload = function () {
    // carregarGraficoDePizza()
    carregarFeedDePosts();

}

function homepage() {
    reset();

    msg_home.innerHTML = `<h1>Bem Vindo ${nome_usuario}👋</h1>`;
    carregarFeedDePosts();
}

function postar() {
    if (typeof ipt_conteudo_postado !== 'undefined' && ipt_conteudo_postado !== null) {
        const conteudoPost = ipt_conteudo_postado.value;
        
        if (!conteudoPost.trim()) return;

        fetch("/main", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                conteudo: conteudoPost
            })
        })
        .then(function (resposta) {
            if (resposta.ok) {
                console.log("Post enviado com sucesso!");
                carregarFeedDePosts(); // Recarrega o feed após postar
            } else {
                console.error("Erro ao enviar post:", resposta.status);
            }
        })
        .catch(function (erro) {
            console.error(`#ERRO: ${erro}`);
        });

        ipt_conteudo_postado.value = "";
    }
}

function carregarFeedDePosts() {
    fetch("/main/feed")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            if (typeof feed_de_posts !== 'undefined' && feed_de_posts !== null) {
                let postsHTML = '';
                
                if (posts.length > 0) {
                    posts.forEach(post => {
                        postsHTML += `
                            <div id="cards_post">
                                <div class="card">
                                    ${post.nome_usuario ? `<strong>${post.nome_usuario}:</strong> ` : ''}
                                    ${post.conteudo_publicacao}<br>
                                    <small>${new Date(post.data_publicacao).toLocaleString()}</small>
                                </div>
                            </div>
                        `;
                    });
                } else {
                    postsHTML = '<p>Ainda não há posts no feed.</p>';
                }
                
                feed_de_posts.innerHTML = postsHTML;
            }
        })
        .catch(error => {
            console.error('Erro ao carregar o feed de posts:', error);
            if (typeof feed_de_posts !== 'undefined' && feed_de_posts !== null) {
                feed_de_posts.innerHTML = '<p>Erro ao carregar o feed.</p>';
            }
        });





    }

