
window.onload = function () {
    // carregarGraficoDePizza()
    carregarFeedDePosts();
    msg_home.innerHTML = `<h1>Bem Vindo ${nome_usuario_Local}👋</h1>`;
}
const idUsuario = sessionStorage.ID_USUARIO;
const nome_usuario_Local = sessionStorage.NOME_USUARIO

function homepage() {
    
    reset();
    
        
    
    carregarFeedDePosts();
}
window.postar = postar;
function postar() {
    if (typeof ipt_conteudo_postado !== 'undefined' && ipt_conteudo_postado !== null) {
        let conteudoPost = ipt_conteudo_postado.value;
        
        

        fetch("/homepage/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                conteudo_publicacao: conteudoPost,
                Fk_id_usuario:idUsuario
            })
        })
        .then(function (resposta) {
            if (resposta.ok) {
                console.log("Post enviado com sucesso!");
                carregarFeedDePosts(); 
               
            } else {
                console.error("Erro ao enviar post:", resposta.status);
                console.log(resposta)
                console.log(conteudoPost)
            }
        })
        .catch(function (erro) {
            console.error(`#ERRO: ${erro}`);
        });

        ipt_conteudo_postado.value = "";
    }
}

function carregarFeedDePosts() {
    fetch("/homePage/feed")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                
            }
            return response.json();
        })
        .then(posts => {
            if (typeof feed_de_posts !== 'undefined' && feed_de_posts !== null) {
                feed_de_posts.innerHTML = '';
                
                if (posts.length > 0) {
                    posts.forEach(post => {
                        feed_de_posts.innerHTML += `
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
                    feed_de_posts.innerHTML = '<p>Ainda não há posts no feed.</p>';
                }
                
                
            }
        })
        .catch(error => {
            console.error('Erro ao carregar o feed de posts:', error);
            
            if (typeof feed_de_posts !== 'undefined' && feed_de_posts !== null) {
                feed_de_posts.innerHTML = '<p>Erro ao carregar o feed.</p>';
            }
        });



        
    }
    