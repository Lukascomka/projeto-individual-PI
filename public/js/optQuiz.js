const quiZ = document.querySelector(".class-quiz");
function optconsole() {
    const selectElement = document.querySelector('#optconsoleid');
    const select_option = selectElement.value;
    const div_escolha = document.querySelector(".conteudo_options_console");

    if (select_option === '#') {
        div_escolha.innerHTML = 'Selecione uma plataforma para jogar!';
        return;
    }

    if (select_option == 'playstation') {
        
        
        sessionStorage.setItem('Selected_QUIZ_ID', 1)
        div_escolha.innerHTML = `
                   <div class="sessao">                             
<h2>Qual é o nome do personagem principal da série <span>God of War?</span></h2>                             
<div class="opcoes">                                 
    <input type="text" name="grupo1" id="respostaGrupoPlaystation1">                                 
    <div class="input">                                 
        <div class="nomedasopcoes">1ª Kratos</div>                                 
        <div class="nomedasopcoes">2ª Ares</div>                                 
        <div class="nomedasopcoes">3ª Atreus</div>                                 
        <div class="nomedasopcoes">4ª Hades</div>                                 
    </div>                             
</div>                         
</div>                                                  

<div class="sessao">                             
<h2>Quem é o protagonista da série Uncharted?</h2>                             
<div class="opcoes">                                 
    <input type="text" name="grupo2" id="respostaGrupoPlaystation2">                                 
    <div class="input">                                 
        <div class="nomedasopcoes">1ª Joel</div>                                 
        <div class="nomedasopcoes">2ª Nathan Drake</div>                                 
        <div class="nomedasopcoes">3ª Sully</div>                                 
        <div class="nomedasopcoes">4ª Desmond</div>                                 
    </div>                             
</div>                         
</div>                          

<div class="sessao">                             
<h2>Qual jogo se passa em um mundo pós-apocalíptico provocado por um fungo que existe no mundo real?</h2>                             
<div class="opcoes">                                  
    <input type="text" name="grupo3" id="respostaGrupoPlaystation3">                                 
    <div class="input">                                 
        <div class="nomedasopcoes">1ª Days Gone</div>                                 
        <div class="nomedasopcoes">2ª Fallout</div>                                 
        <div class="nomedasopcoes">3ª The last of Us</div>                                 
        <div class="nomedasopcoes">4ª Horizon</div>                                 
    </div>                             
</div>                         
</div>                          

<div class="sessao">                             
<h2>Qual jogo se passa em um mundo pós-apocalíptico devido a revolução das maquinas?</h2>                             
<div class="opcoes">                                  
    <input type="text" name="grupo4" id="respostaGrupoPlaystation4">                                 
    <div class="input">                                 
        <div class="nomedasopcoes">1ª Call of Duty</div>                                 
        <div class="nomedasopcoes">2ª Metal Slug</div>                                 
        <div class="nomedasopcoes">3ª Sully</div>                                 
        <div class="nomedasopcoes">4ª Horizon Zero Dawn</div>                                 
    </div>                             
</div>                         
</div> 

<div class="sessao">     
<h2>Qual jogo se passa em um mundo futurista onde androides lutam por liberdade?</h2>     
<div class="opcoes">         
    <input type="text" name="grupo5" id="respostaGrupoPlaystation5">         
    <div class="input">
        <div class="nomedasopcoes">1ª Detroit: Become Human</div>         
        <div class="nomedasopcoes">2ª Mass Effect</div>         
        <div class="nomedasopcoes">3ª Cyberpunk 2077</div>         
        <div class="nomedasopcoes">4ª Ghostrunner</div>     
    </div>
</div> 
</div>                           

<div class="sessao">                             
<h2>Qual jogo retrata a vida de um especialista hacker?</h2>                             
<div class="opcoes">                                 
    <input type="text" name="grupo6" id="respostaGrupoPlaystation6">                                 
    <div class="input">
        <div class="nomedasopcoes">1ª Watch Dogs</div>                                 
        <div class="nomedasopcoes">2ª Metal Slug</div>                                 
        <div class="nomedasopcoes">3ª Bloodborne</div>                                 
        <div class="nomedasopcoes">4ª Rachet & Clank</div>                             
    </div>
</div>                         
</div>                          

<div class="sessao">                             
<h2>Qual jogo de playstation se passa em um ambiente de faroeste?</h2>                             
<div class="opcoes">                                 
    <input type="text" name="grupo7" id="respostaGrupoPlaystation7">                                 
    <div class="input">
        <div class="nomedasopcoes">1ª Sekiro</div>                                 
        <div class="nomedasopcoes">2ª Far Cry6</div>                                 
        <div class="nomedasopcoes">3ª It Takes Two</div>                                 
        <div class="nomedasopcoes">4ª Red dead Redemption 2</div>                             
    </div>
</div>                         
</div>                          

<div class="sessao">                             
<h2>Qual personagem protagonista é um ex gangster que se torna policial e é promovido a detetive?</h2>                             
<div class="opcoes">                                 
    <input type="text" name="grupo8" id="respostaGrupoPlaystation8">                                 
    <div class="input">
        <div class="nomedasopcoes">1ª Drive</div>                                 
        <div class="nomedasopcoes">2ª winning eleven</div>                                 
        <div class="nomedasopcoes">3ª True Crime</div>                                 
        <div class="nomedasopcoes">4ª Pac-man</div>                             
    </div>
</div>                         
</div>                          

<div class="sessao">                             
<h2>Qual jogo de corrida tem o objetivo de fazer o protagonista se tornar o 1° piloto na "Black List"?</h2>                             
<div class="opcoes">                                 
    <input type="text" name="grupo9" id="respostaGrupoPlaystation9">                                 
    <div class="input">
        <div class="nomedasopcoes">1ª Gran Turismo</div>                                 
        <div class="nomedasopcoes">2ª Crash Nitro Kart</div>                                 
        <div class="nomedasopcoes">3ª Midnight Club</div>                                 
        <div class="nomedasopcoes">4ª Need For speed Most Wanted</div>                             
    </div>
</div>                         
</div>                          

<div class="sessao">                             
<h2>Qual jogo é ambientado em um internato e o nome do seu protagonista é Jimmy?</h2>                             
<div class="opcoes">                                 
    <input type="text" name="grupo10" id="respostaGrupoPlaystation10">                                 
    <div class="input">
        <div class="nomedasopcoes">1ª Don't Starve</div>                                 
        <div class="nomedasopcoes">2ª Fallout 4</div>                                 
        <div class="nomedasopcoes">3ª Death Stranding</div>                                 
        <div class="nomedasopcoes">4ª Bully</div>                             
    </div>
</div>                         
</div>                         

<button onclick="fimQuizPlaystation()" class="buttonQuiz">Terminar Quiz</button>
`;

    }
    else if (select_option == 'xbox') {
        
        
        sessionStorage.setItem('Selected_QUIZ_ID', 2)
        div_escolha.innerHTML = `
<div class="sessao">
    <h2>Qual é o protagonista da franquia Halo?</h2>
    <div class="opcoes">
        <input type="text" name="grupo1" id="respostaGrupoXbox1">
        <div class="input">
            <div class="nomedasopcoes">1ª Master Chief</div>
            <div class="nomedasopcoes">2ª Cortana</div>
            <div class="nomedasopcoes">3ª Spartan Locke</div>
            <div class="nomedasopcoes">4ª Commander Shepard</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo exclusivo do Xbox é focado em carros e corridas em mundo aberto?</h2>
    <div class="opcoes">
        <input type="text" name="grupo2" id="respostaGrupoXbox2">
        <div class="input">
            <div class="nomedasopcoes">1ª Forza Horizon</div>
            <div class="nomedasopcoes">2ª Gran Turismo</div>
            <div class="nomedasopcoes">3ª Need for Speed</div>
            <div class="nomedasopcoes">4ª F1 2023</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo de ação e aventura é protagonizado por Senua, uma guerreira celta?</h2>
    <div class="opcoes">
        <input type="text" name="grupo3" id="respostaGrupoXbox3">
        <div class="input">
            <div class="nomedasopcoes">1ª Hellblade: Senua's Sacrifice</div>
            <div class="nomedasopcoes">2ª ReCore</div>
            <div class="nomedasopcoes">3ª Gears 5</div>
            <div class="nomedasopcoes">4ª Halo Infinite</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual franquia de tiro em terceira pessoa é conhecida por seu uso do sistema de cobertura e inimigos Locust?</h2>
    <div class="opcoes">
        <input type="text" name="grupo4" id="respostaGrupoXbox4">
        <div class="input">
            <div class="nomedasopcoes">1ª Gears of War</div>
            <div class="nomedasopcoes">2ª Call of Duty</div>
            <div class="nomedasopcoes">3ª The Division</div>
            <div class="nomedasopcoes">4ª Battlefield</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo exclusivo da Xbox permite criar mundos inteiros com blocos?</h2>
    <div class="opcoes">
        <input type="text" name="grupo5" id="respostaGrupoXbox5">
        <div class="input">
            <div class="nomedasopcoes">1ª Minecraft</div>
            <div class="nomedasopcoes">2ª Roblox</div>
            <div class="nomedasopcoes">3ª Terraria</div>
            <div class="nomedasopcoes">4ª Lego Worlds</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual é o nome do jogo de plataforma estrelado por um esquilo sarcástico em um mundo adulto?</h2>
    <div class="opcoes">
        <input type="text" name="grupo6" id="respostaGrupoXbox6">
        <div class="input">
            <div class="nomedasopcoes">1ª Conker's Bad Fur Day</div>
            <div class="nomedasopcoes">2ª Banjo-Kazooie</div>
            <div class="nomedasopcoes">3ª Blinx: The Time Sweeper</div>
            <div class="nomedasopcoes">4ª Viva Piñata</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo exclusivo do Xbox coloca o jogador no controle de uma jovem chamada Kameo com poderes elementais?</h2>
    <div class="opcoes">
        <input type="text" name="grupo7" id="respostaGrupoXbox7">
        <div class="input">
            <div class="nomedasopcoes">1ª Kameo: Elements of Power</div>
            <div class="nomedasopcoes">2ª Fable II</div>
            <div class="nomedasopcoes">3ª Ori and the Blind Forest</div>
            <div class="nomedasopcoes">4ª Blue Dragon</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual RPG exclusivo do Xbox foi criado por Peter Molyneux e permite fazer escolhas morais?</h2>
    <div class="opcoes">
        <input type="text" name="grupo8" id="respostaGrupoXbox8">
        <div class="input">
            <div class="nomedasopcoes">1ª Fable</div>
            <div class="nomedasopcoes">2ª Mass Effect</div>
            <div class="nomedasopcoes">3ª Dragon Age</div>
            <div class="nomedasopcoes">4ª Elder Scrolls</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo do Xbox tem uma mecânica baseada em manipular o tempo?</h2>
    <div class="opcoes">
        <input type="text" name="grupo9" id="respostaGrupoXbox9">
        <div class="input">
            <div class="nomedasopcoes">1ª Quantum Break</div>
            <div class="nomedasopcoes">2ª Control</div>
            <div class="nomedasopcoes">3ª Alan Wake</div>
            <div class="nomedasopcoes">4ª Max Payne</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo indie exclusivo da Xbox é conhecido por sua arte desenhada à mão e trilha sonora jazz?</h2>
    <div class="opcoes">
        <input type="text" name="grupo10" id="respostaGrupoXbox10">
        <div class="input">
            <div class="nomedasopcoes">1ª Cuphead</div>
            <div class="nomedasopcoes">2ª Ori and the Will of the Wisps</div>
            <div class="nomedasopcoes">3ª Hollow Knight</div>
            <div class="nomedasopcoes">4ª Shovel Knight</div>
        </div>
    </div>
</div>
<button onclick="fimQuizXbox()" class="buttonQuiz">Terminar Quiz</button>
<div class="FinalQuiz" id="FinalQuiz">
</div>`;

    }
    else if (select_option == 'fliperama') {
        
        
        sessionStorage.setItem('Selected_QUIZ_ID', 3)
        div_escolha.innerHTML = `
<div class="sessao">
    <h2>Qual personagem é o principal representante da série Street Fighter?</h2>
    <div class="opcoes">
        <input type="text" name="grupo1" id="respostaGrupoFliperama1">
        <div class="input">
            <div class="nomedasopcoes">1ª Ryu</div>
            <div class="nomedasopcoes">2ª Scorpion</div>
            <div class="nomedasopcoes">3ª Terry Bogard</div>
            <div class="nomedasopcoes">4ª Liu Kang</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo de luta criado pela Midway ficou famoso pela violência e "Fatalities"?</h2>
    <div class="opcoes">
        <input type="text" name="grupo2" id="respostaGrupoFliperama2">
        <div class="input">
            <div class="nomedasopcoes">1ª Mortal Kombat</div>
            <div class="nomedasopcoes">2ª Tekken</div>
            <div class="nomedasopcoes">3ª Street Fighter</div>
            <div class="nomedasopcoes">4ª Virtua Fighter</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo de corrida de fliperama é conhecido por seu estilo futurista e trilha sonora eletrônica?</h2>
    <div class="opcoes">
        <input type="text" name="grupo3" id="respostaGrupoFliperama3">
        <div class="input">
            <div class="nomedasopcoes">1ª F-Zero</div>
            <div class="nomedasopcoes">2ª OutRun</div>
            <div class="nomedasopcoes">3ª Cruis'n USA</div>
            <div class="nomedasopcoes">4ª Daytona USA</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo de plataforma com um gorila como vilão foi um dos primeiros sucessos da Nintendo nos fliperamas?</h2>
    <div class="opcoes">
        <input type="text" name="grupo4" id="respostaGrupoFliperama4">
        <div class="input">
            <div class="nomedasopcoes">1ª Donkey Kong</div>
            <div class="nomedasopcoes">2ª Mario Bros.</div>
            <div class="nomedasopcoes">3ª Bubble Bobble</div>
            <div class="nomedasopcoes">4ª Ghosts 'n Goblins</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual beat 'em up clássico da Capcom permitia até 3 jogadores simultaneamente nas ruas de Metro City?</h2>
    <div class="opcoes">
        <input type="text" name="grupo5" id="respostaGrupoFliperama5">
        <div class="input">
            <div class="nomedasopcoes">1ª Final Fight</div>
            <div class="nomedasopcoes">2ª Double Dragon</div>
            <div class="nomedasopcoes">3ª Cadillacs and Dinosaurs</div>
            <div class="nomedasopcoes">4ª Golden Axe</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo de fliperama da SNK tem como protagonista Terry Bogard?</h2>
    <div class="opcoes">
        <input type="text" name="grupo6" id="respostaGrupoFliperama6">
        <div class="input">
            <div class="nomedasopcoes">1ª Fatal Fury</div>
            <div class="nomedasopcoes">2ª Samurai Shodown</div>
            <div class="nomedasopcoes">3ª The King of Fighters</div>
            <div class="nomedasopcoes">4ª World Heroes</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo da SEGA apresentava motos futuristas em pistas tridimensionais e ficou famoso nos arcades?</h2>
    <div class="opcoes">
        <input type="text" name="grupo7" id="respostaGrupoFliperama7">
        <div class="input">
            <div class="nomedasopcoes">1ª Super Hang-On</div>
            <div class="nomedasopcoes">2ª Road Rash</div>
            <div class="nomedasopcoes">3ª Excitebike</div>
            <div class="nomedasopcoes">4ª Enduro Racer</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo arcade tem como objetivo principal comer todos os pontos e fugir dos fantasmas?</h2>
    <div class="opcoes">
        <input type="text" name="grupo8" id="respostaGrupoFliperama8">
        <div class="input">
            <div class="nomedasopcoes">1ª Pac-Man</div>
            <div class="nomedasopcoes">2ª Bomberman</div>
            <div class="nomedasopcoes">3ª Dig Dug</div>
            <div class="nomedasopcoes">4ª Q*bert</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual é o nome do jogo onde dois jogadores pilotam tanques e aviões em um estilo de guerra contra aliens?</h2>
    <div class="opcoes">
        <input type="text" name="grupo9" id="respostaGrupoFliperama9">
        <div class="input">
            <div class="nomedasopcoes">1ª Metal Slug</div>
            <div class="nomedasopcoes">2ª Contra</div>
            <div class="nomedasopcoes">3ª 1942</div>
            <div class="nomedasopcoes">4ª Gunstar Heroes</div>
        </div>
    </div>
</div>

<div class="sessao">
    <h2>Qual jogo de fliperama coloca você na pele de cavaleiros em uma aventura medieval contra mortos-vivos?</h2>
    <div class="opcoes">
        <input type="text" name="grupo10" id="respostaGrupoFliperama10">
        <div class="input">
            <div class="nomedasopcoes">1ª Ghosts 'n Goblins</div>
            <div class="nomedasopcoes">2ª Golden Axe</div>
            <div class="nomedasopcoes">3ª Altered Beast</div>
            <div class="nomedasopcoes">4ª Castlevania</div>
        </div>
    </div>
</div>

<button onclick="fimQuizFliperama()" class="buttonQuiz">Terminar Quiz</button>
`;
    }
    
}
window.optconsole = optconsole;
