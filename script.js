const storyData = {
    inicio: {
        step: "Etapa 1 de 10",
        text: "Miga, socorro! É o ano 2004 e os apagões constantes na comunidade Alameda dos Ipês estão cortando a energia do seu rádio e do seu Discman! Tiffany decide: 'Isso é tão ano passado! Vamos atualizar o bairro com energias renováveis e sustentáveis!' Por onde começamos a mudar o mundo com muito estilo?",
        status: "Pronta para a missão 💅",
        choices: [
            { text: "☀️ Focar em painéis de Energia Solar nas casas (Muito moderno!).", target: "solar_2" },
            { text: "💨 Propor mini usinas de Energia Eólica no morro (Vento é o novo preto!).", target: "eolica_2" },
            { text: "🛢️ Comprar um gerador antigo a diesel bem barulhento pros blocos.", target: "game_over_diesel" }
        ]
    },
    solar_2: {
        step: "Etapa 2 de 10 • Rota Solar ☀️",
        text: "Tiffany convoca uma reunião no salão de festas com um look impecável. Ela explica que os painéis fotovoltaicos convertem a luz do sol diretamente em eletricidade limpa. Porém, o síndico rabugento, Seu Valdir, diz que vai ficar muito caro e feio nas telhas. Como convencer ele?",
        status: "Ativista Solar ☀️",
        choices: [
            { text: "📊 Mostrar os cálculos de economia na conta de luz a longo prazo e sugerir um mutirão.", target: "solar_3" },
            { text: "🔥 Desistir dos painéis e sugerir queimar o lixo do bairro para gerar energia térmica.", target: "game_over_lixo" }
        ]
    },
    solar_3: {
        step: "Etapa 3 de 10 • Rota Solar ☀️",
        text: "Arrasou nos gráficos! Seu Valdir topou! Agora precisamos fazer o estudo técnico dos telhados da Alameda dos Ipês. Como estamos no Brasil (Hemisfério Sul), para qual direção os painéis solares devem ficar inclinados para captar o máximo de luz o ano inteiro?",
        status: "Engenheira Fashion 📐",
        choices: [
            { text: "🧭 Virados para o Norte geográfico, longe da sombra das árvores.", target: "solar_4" },
            { text: "🌳 Virados para o Sul, bem debaixo das copas das árvores grandes para não esquentar.", target: "game_over_sombra" }
        ]
    },
    solar_4: {
        step: "Etapa 4 de 10 • Rota Solar ☀️",
        text: "Perfeito! Os painéis geram energia elétrica em Corrente Contínua (CC), mas o aparelho de som e a TV de tubo da Tiffany usam Corrente Alternada (CA). Qual equipamento essencial precisamos instalar no sistema?",
        status: "Expert em Fotovoltaica ⚡",
        choices: [
            { text: "🔌 Instalar um Inversor Solar para converter a energia com segurança.", target: "solar_5" },
            { text: "✂️ Cortar os fios e ligar direto na tomada sem equipamento nenhum.", target: "game_over_curto" }
        ]
    },
    solar_5: {
        step: "Etapa 5 de 10 • Rota Solar ☀️",
        text: "Dúvida da vizinhança no grupo do MSN Messenger: 'Tiffany, e se o dia ficar nublado ou chover no meio da novela? A gente fica no escuro?'. Qual é a solução inteligente e sustentável para isso?",
        status: "Influencer Ecológica 💻",
        choices: [
            { text: "🔋 Conectar o sistema à rede elétrica (on-grid) com créditos de energia e baterias de apoio.", target: "solar_6" },
            { text: "🕯️ Distribuir velas de parafina e lampiões a querosene para todo mundo.", target: "game_over_fumaca" }
        ]
    },
    solar_6: {
        step: "Etapa 6 de 10 • Rota Solar ☀️",
        text: "Os equipamentos chegaram em caixas enormes de papelão, plástico bolha e isopor! Para manter o compromisso ecológico da Alameda dos Ipês, o que Tiffany organiza com os moradores?",
        status: "Guardiã da Reciclagem ♻️",
        choices: [
            { text: "♻️ Separar todos os resíduos e encaminhar para a cooperativa de reciclagem do bairro.", target: "solar_7" },
            { text: "🚮 Jogar tudo no terreno baldio ao lado do córrego durante a madrugada.", target: "game_over_lixo" }
        ]
    },
    solar_7: {
        step: "Etapa 7 de 10 • Rota Solar ☀️",
        text: "Na hora da instalação no telhado, alguns moradores sem experiência querem subir de chinelo de dedo para ajudar e economizar. Como Tiffany lidera a segurança da obra?",
        status: "Líder Responsável ⛑️",
        choices: [
            { text: "🦺 Contratar técnicos certificados com EPIs e deixar os moradores apoiando na logística em terra.", target: "solar_8" },
            { text: "🩴 Deixar todo mundo subir no telhado molhado sem capacete nem cinto.", target: "game_over_acidente" }
        ]
    },
    solar_8: {
        step: "Etapa 8 de 10 • Rota Solar ☀️",
        text: "Tudo instalado! Mas o orçamento comunitário apertou e faltou dinheiro para ligar a iluminação da quadra de esportes e do parquinho. Qual ideia genial a Tiffany tem?",
        status: "Estrategista Comunitária 💡",
        choices: [
            { text: "🎤 Organizar um bazar beneficente retrô e um festival de talentos para arrecadar fundos.", target: "solar_9" },
            { text: "🪓 Cortar e vender a madeira dos ipês centenários que dão nome ao bairro.", target: "game_over_desmate" }
        ]
    },
    solar_9: {
        step: "Etapa 9 de 10 • Rota Solar ☀️",
        text: "Seis meses depois, os painéis acumularam poeira e folhas secas, reduzindo a eficiência da captação solar. Como fazer a manutenção sem desperdício?",
        status: "Consultora Sustentável 💧",
        choices: [
            { text: "🌧️ Fazer limpeza periódica usando água da chuva reaproveitada e pano macio.", target: "solar_10" },
            { text: "🧪 Lavar os painéis todos os dias com produtos químicos tóxicos e mangueira aberta.", target: "game_over_quimico" }
        ]
    },
    solar_10: {
        step: "Etapa 10 de 10 • Desafio Final Solar 🏆",
        text: "Último desafio! A prefeitura ficou impressionada com a Alameda dos Ipês e quer transformar o bairro em modelo nacional de sustentabilidade. O que Tiffany propõe como legado final?",
        status: "Finalista Miss Ecologia 👑",
        choices: [
            { text: "🏫 Criar oficinas gratuitas de educação ambiental e energia limpa para escolas da região.", target: "final_solar" },
            { text: "🔒 Cobrar ingresso caro para qualquer pessoa de fora olhar os painéis.", target: "game_over_egoismo" }
        ]
    },
    eolica_2: {
        step: "Etapa 2 de 10 • Rota Eólica 💨",
        text: "Tiffany sobe no ponto mais alto da comunidade com sua bandana rosa. Ela percebe que o vento lá é constante para girar aerogeradores e gerar eletricidade limpa! Mas a associação teme o barulho das hélices. Como responder?",
        status: "Eco-Eólica 💨",
        choices: [
            { text: "🍃 Explicar que as turbinas modernas têm design aerodinâmico silencioso e usam vento infinito.", target: "eolica_3" },
            { text: "🌊 Mudar o plano e represar o riacho local, inundando as casas para fazer uma hidrelétrica.", target: "game_over_represa" }
        ]
    },
    eolica_3: {
        step: "Etapa 3 de 10 • Rota Eólica 💨",
        text: "Os vizinhos adoraram a ideia! Antes de comprar qualquer equipamento, qual passo técnico a Tiffany exige no topo do morro?",
        status: "Pesquisadora dos Ventos 🌬️",
        choices: [
            { text: "📏 Instalar um anemômetro para medir a velocidade e a direção dos ventos por um período.", target: "eolica_4" },
            { text: "🎲 Comprar as maiores turbinas no chute sem saber se o vento é forte o bastante.", target: "game_over_chute" }
        ]
    },
    eolica_4: {
        step: "Etapa 4 de 10 • Rota Eólica 💨",
        text: "As medições mostraram ventos ótimos! Porém, uma bióloga alertou que a área fica próxima a uma rota de pássaros locais. Como tornar o projeto amigo da fauna?",
        status: "Protetora da Fauna 🦜",
        choices: [
            { text: "🦅 Posicionar as torres fora do corredor de voo e pintar uma pá de preto para aumentar a visibilidade.", target: "eolica_5" },
            { text: "📢 Instalar sirenes ensurdecedoras para espantar todos os animais da floresta.", target: "game_over_fauna" }
        ]
    },
    eolica_5: {
        step: "Etapa 5 de 10 • Rota Eólica 💨",
        text: "Na aula comunitária da Tiffany, um morador pergunta: 'Como o vento vira eletricidade para carregar meu celular tijolão?'. Qual é a explicação correta?",
        status: "Professora Pop 🎓",
        choices: [
            { text: "⚙️ A energia cinética do vento gira as pás, acionando um gerador que transforma movimento em eletricidade.", target: "eolica_6" },
            { text: "🔥 O atrito das hélices esquenta o ar e queima carvão mineral dentro da torre.", target: "game_over_carvao" }
        ]
    },
    eolica_6: {
        step: "Etapa 6 de 10 • Rota Eólica 💨",
        text: "É hora de levar os cabos de energia do topo do morro até as casas da Alameda dos Ipês. Qual é a melhor forma de fazer essa transmissão?",
        status: "Engenheira de Redes 🔌",
        choices: [
            { text: "🌱 Utilizar rede subterrânea bem isolada nas trilhas já existentes, preservando a vegetação nativa.", target: "eolica_7" },
            { text: "🚜 Abrir uma avenida de asfalto derrubando toda a mata do morro para passar postes.", target: "game_over_desmate" }
        ]
    },
    eolica_7: {
        step: "Etapa 7 de 10 • Rota Eólica 💨",
        text: "E nos dias de calmaria total, quando o vento dá uma trégua no bairro? Como a Tiffany garante que o Discman não pare de tocar?",
        status: "Mestre do Planejamento 🔋",
        choices: [
            { text: "⚡ Integrar um banco de baterias recarregáveis e conexão híbrida com a rede pública.", target: "eolica_8" },
            { text: "🛢️ Ligar motores a gasolina toda vez que o vento diminuir.", target: "game_over_diesel" }
        ]
    },
    eolica_8: {
        step: "Etapa 8 de 10 • Rota Eólica 💨",
        text: "Para pagar a manutenção das turbinas sem pesar no bolso das famílias mais humildes do bairro, qual modelo de gestão a Tiffany cria?",
        status: "Gestora Solidária 🤝",
        choices: [
            { text: "🏘️ Criar uma cooperativa comunitária onde os créditos de energia reduzem a conta de todos.", target: "eolica_9" },
            { text: "💸 Vender toda a energia para uma fábrica poluente e deixar o bairro sem luz.", target: "game_over_egoismo" }
        ]
    },
eolica_9: {
step: "Etapa 9 de 10 • Rota Eólica 💨",
text: "Uma frente fria com ventos muito fortes se aproxima da Alameda dos Ipês! Como o sistema eólico moderno reage para não quebrar?",
status: "Especialista em Segurança 🛡️",
choices: [
{ text: "🛑 Acionar o sistema automático de freio e ajuste de ângulo das pás (pitch control).", target: "eolica_10" },
{ text: "🪢 Amarrar cordas de varal nas hélices para tentar segurar na mão.", target: "game_over_acidente" }
]
},
eolica_10: {
step: "Etapa 10 de 10 • Desafio Final Eólico 🏆",
text: "Último desafio! O vento transformou a Alameda dos Ipês no bairro mais moderno de 2004! Como Tiffany utiliza o mirante do morro agora que as turbinas estão funcionando?",
status: "Finalista Miss Ecologia 👑",
choices: [
{ text: "🌻 Criar um parque ecológico educativo com trilha sustentável e mirante aberto à comunidade.", target: "final_eolica" },
{ text: "🗑️ Transformar o topo do morro em depósito de entulho de construção.", target: "game_over_lixo" }
]
},
final_solar: {
step: "🏆 Missão Concluída (10/10)!",
text: "✨ FINAL SOLAR: Um Arraso! Você completou todas as 10 etapas com perfeição! O bairro instalou os painéis fotovoltaicos, reduziu a conta de luz e virou referência em educação ambiental. O Discman da Tiffany nunca mais ficou sem bateria. É o pico do modernismo ecológico, miga!",
status: "Diva da Sustentabilidade 👑",
choices: [{ text: "👑 Ver Créditos e Referências", target: "creditos" }]
},
final_eolica: {
step: "🏆 Missão Concluída (10/10)!",
text: "✨ FINAL EÓLICO: Tudo de Bom! Você venceu todas as 10 etapas! As turbinas no topo do morro garantiram energia limpa, silenciosa e renovável para toda a comunidade. Para comemorar, Tiffany organizou uma festa iluminada 100% por energia eólica. Um bafão histórico!",
status: "Rainha dos Ventos 🌪️",
choices: [{ text: "🛍️ Ver Créditos e Referências", target: "creditos" }]
},
creditos: {
step: "🌸 Créditos Oficiais 🌸",
text: "Você concluiu as 10 etapas com sucesso e salvou a Alameda dos Ipês com muito estilo! Vamos dar uma olhada em quem fez esse bafão acontecer?",
status: "Miss Ecologia 2004 🌍",
choices: [{ text: "✨ Jogar Novamente", target: "inicio" }]
},
game_over_diesel: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Você apostou em combustíveis fósseis poluentes! O rádio até voltou, mas o bairro ficou coberto de fumaça preta e barulho. Todo mundo cancelou a Tiffany do topo do fã-clube. Zero sustentável! Que uó!",
status: "Cancelada no Orkut 💔",
choices: [{ text: "💔 Tentar Novamente", target: "inicio" }]
},
game_over_lixo: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Descartar ou queimar lixo de forma errada liberou gases tóxicos e contaminou o solo do bairro! A fiscalização ambiental multou a comunidade inteira. Que mico!",
status: "Perdeu o Brilho 📉",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_represa: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Você inundou a quadra de esportes e as casas da metade de baixo do bairro! Criar uma represa sem estudo de impacto ambiental destruiu a comunidade. Nada fashion!",
status: "Desastre Ecológico 🌊",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_sombra: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Painéis solares precisam de radiação solar direta! Colocá-los na sombra e virados para o Sul fez o sistema não gerar quase nada de energia. O apagão voltou bem na hora do clipe da Britney!",
status: "Sem Bateria no Discman 🪫",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_curto: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Sem o Inversor Solar para converter Corrente Contínua em Corrente Alternada, todos os aparelhos eletrônicos da casa queimaram! O rádio da Tiffany deu adeus!",
status: "Deu Curto no Look ⚡",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_fumaca: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Usar querosene e velas dentro de casa encheu o bairro de fuligem e causou risco de incêndio. Em pleno 2004, retroceder para o século XIX não tá com nada!",
status: "Totalmente Fora de Moda 🕯️",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_acidente: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Sustentabilidade também exige segurança do trabalho! Improvisar sem equipamentos de proteção causou um acidente e interditou a obra do bairro.",
status: "Obra Interditada 🚧",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_desmate: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Derrubar árvores nativas para instalar energia limpa é uma contradição total! A Alameda dos Ipês ficou sem seus ipês e sem equilíbrio ecológico.",
status: "Erro Ambiental 🌳",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_quimico: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Os produtos químicos escorreram pelas calhas e contaminaram a água do bairro, além de estragarem a película protetora dos painéis solares!",
status: "Manutenção Desastrosa 🧪",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_egoismo: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Energia renovável comunitária só funciona com inclusão social! Deixar os vizinhos de fora acabou com o espírito coletivo da Alameda dos Ipês.",
status: "Zero Espírito de Equipe 😒",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_chute: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Sem medição de ventos com anemômetro, as turbinas foram instaladas num ponto sem corrente de ar suficiente. As hélices ficaram paradas como enfeite gigante!",
status: "Faltou Planejamento 🌬️",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_fauna: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Poluição sonora espantou todas as aves e desequilibrou o ecossistema local. Energia limpa precisa respeitar a biodiversidade!",
status: "Sem Harmonia Ambiental 🦜",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
},
game_over_carvao: {
step: "❌ Game Over!",
text: "❌ GAME OVER: Queimar carvão mineral libera muito CO2 na atmosfera e causa aquecimento global! Energia eólica funciona apenas com a força limpa do vento.",
status: "Reprovada em Ciências 🌫️",
choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
}
};
function updateGame(stateKey) {
const state = storyData[stateKey];
if (!state) {
console.error(`Estado não encontrado: ${stateKey}`);
return;
}
const storyTextEl = document.getElementById("story-text");
const statusEl = document.getElementById("status");
const stepBadgeEl = document.getElementById("step-badge");
const choicesContainer = document.getElementById("choices-container");
const creditsList = document.getElementById("credits-list");
if (storyTextEl) storyTextEl.innerText = state.text;
if (statusEl) statusEl.innerText = state.status;
if (stepBadgeEl && state.step) stepBadgeEl.innerText = state.step;
if (choicesContainer) choicesContainer.innerHTML = "";
if (creditsList) {
if (stateKey === "creditos") {
creditsList.innerHTML = `
<div class="equipe-container">
  <span class="credits-section-title">🎀 Equipe de Desenvolvimento</span>
  <p class="turma-badge">✨ Turma 3I ✨</p>

  <div class="dev-cards">
    <div class="dev-card">
      <span class="dev-icon">👩‍💻</span>
      <span class="dev-name">Amanda F</span>
      <span class="dev-num">Nº 03</span>
    </div>
    <div class="dev-card">
      <span class="dev-icon">💅</span>
      <span class="dev-name">Amanda C</span>
      <span class="dev-num">Nº 04</span>
    </div>
  </div>

  <span class="credits-section-title">🌐 Fontes &amp; Inspirações</span>
  <div class="sources-grid">
    <div class="source-item">🌸 <a href="https://alura.com.br" target="_blank" rel="noopener noreferrer">Plataforma Alura</a> — Base de tecnologia e estruturação de códigos.</div>
    <div class="source-item">🌸 <a href="https://brasilescola.uol.com.br" target="_blank" rel="noopener noreferrer">Brasil Escola (UOL)</a> — Dados conceituais sobre matrizes energéticas.</div>
    <div class="source-item">🌸 <a href="https://www.wwf.org.br" target="_blank" rel="noopener noreferrer">WWF Brasil</a> — Conscientização sobre impacto e preservação ambiental.</div>
  </div>

  <div class="ai-badge">🤖 Co-autor digital: Desenvolvido em parceria com Assistente de IA Inteligente.</div>
</div>
`;
creditsList.style.display = "block";
} else {
creditsList.style.display = "none";
}
}
if (choicesContainer) {
state.choices.forEach(choice => {
const button = document.createElement("button");
button.innerText = choice.text;
if (stateKey.startsWith("game_over")) {
button.classList.add("danger");
}
button.addEventListener("click", () => updateGame(choice.target));
choicesContainer.appendChild(button);
});
}
}
window.onload = () => {
updateGame("inicio");
};