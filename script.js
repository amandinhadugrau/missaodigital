// Dicionário contendo todas as telas, textos e lógica de escolhas do jogo
const storyData = {
    inicio: {
        text: "Miga, socorro! É o ano 2004 e os apagões constantes na comunidade Alameda dos Ipês estão cortando a energia do seu rádio e do seu Discman! Tiffany decide: 'Isso é tão ano passado! Vamos atualizar o bairro com energias renováveis e sustentáveis!' Por onde começamos a mudar o mundo com muito estilo?",
        status: "Determinada & Fashion",
        choices: [
            { text: "☀️ Focar em painéis de Energia Solar nas casas (Muito moderno!).", target: "rota_solar" },
            { text: "💨 Propor mini usinas de Energia Eólica no morro (Vento é o novo preto!).", target: "rota_eolica" },
            { text: "🛢️ Comprar um gerador antigo a diesel bem barulhento pros blocos.", target: "game_over_diesel" }
        ]
    },
    rota_solar: {
        text: "☀️ ROTA SOLAR! Tiffany convoca uma reunião comunitária no salão de festas com um look impecável. Ela explica que os painéis fotovoltaicos convertem a luz do sol diretamente em eletricidade limpa. Porém, o síndico rabugento, Seu Valdir, diz que vai ficar muito caro e feio nas telhas.",
        status: "Ativista Solar",
        choices: [
            { text: "📊 Mostrar os cálculos de economia a longo prazo e sugerir um mutirão.", target: "final_solar" },
            { text: "🔥 Desistir dos painéis e sugerir queimar o lixo do bairro para gerar energia térmica.", target: "game_over_lixo" }
        ]
    },
    rota_eolica: {
        text: "💨 ROTA EÓLICA! Tiffany sobe no ponto mais alto da comunidade. Ela percebe que o vento lá é perfeito para girar turbinas eólicas e gerar energia mecânica, que depois vira eletricidade limpinha! Mas a galera da associação teme que o barulho das hélices atrapalhe a novela das oito.",
        status: "Eco-Eólica",
        choices: [
            { text: "🍃 Explicar que as turbinas modernas são silenciosas e o vento é infinito.", target: "final_eolica" },
            { text: "🌊 Mudar o plano e represar o pequeno riacho local, inundando metade das casas para criar uma hidrelétrica.", target: "game_over_represa" }
        ]
    },
    final_solar: {
        text: "✨ FINAL SOLAR: Um Arraso! Seu Valdir cedeu ao charme e aos números! O bairro instalou os painéis fotovoltaicos. Agora a comunidade produz sua própria energia limpa, a conta de luz caiu e o Discman da Tiffany nunca mais ficou sem bateria. É o pico do modernismo ecológico, miga!",
        status: "Diva da Sustentabilidade 👑",
        choices: [{ text: "👑 Jogar Novamente", target: "inicio" }]
    },
    final_eolica: {
        text: "✨ FINAL EÓLICO: Tudo de Bom! As turbinas foram instaladas no topo do morro! O vento garantiu energia limpa e renovável para toda a comunidade sem poluir nada. Para comemorar, Tiffany organizou uma festa iluminada 100% por energia eólica. Foi um bafão histórico de tanto sucesso!",
        status: "Rainha dos Ventos 🌪️",
        choices: [{ text: "🛍️ Jogar Novamente", target: "inicio" }]
    },
    game_over_diesel: {
        text: "❌ GAME OVER: Você comprou um gerador a diesel super poluente! O rádio voltou, mas o bairro ficou coberto de fumaça preta derivada de combustíveis fósseis. Todo mundo cancelou a Tiffany do topo do fã-clube. Zero sustentável! Que uó!",
        status: "Cancelada no Orkut 💔",
        choices: [{ text: "💔 Tentar Novamente", target: "inicio" }]
    },
    game_over_lixo: {
        text: "❌ GAME OVER: Queimar lixo a céu aberto liberou toneladas de gases poluentes e tóxicos no bairro! O visual ficou uó, o cheiro ficou péssimo e a fiscalização ambiental multou a comunidade inteira por quebra de leis ecológicas. Que mico!",
        status: "Perdeu o Brilho 📉",
        choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
    },
    game_over_represa: {
        text: "❌ GAME OVER: Você inundou a quadra de esportes e as casas da metade de baixo do bairro! Criar uma represa sem estudo de impacto ambiental ou planejamento técnico destruiu a comunidade. Destruir o ecossistema local não é nada fashion!",
        status: "Desastre Ecológico 🌊",
        choices: [{ text: "🔄 Tentar Novamente", target: "inicio" }]
    }
};

// Função principal para renderizar o estado atual do jogo
function updateGame(stateKey) {
    const state = storyData[stateKey];
    
    // Atualiza textos na tela
    document.getElementById("story-text").innerText = state.text;
    document.getElementById("status").innerText = state.status;
    
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = ""; // Limpa escolhas anteriores
    
    // Cria novos botões de escolha
    state.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        
        // Estiliza o botão de forma diferente se for um recomeço ou game over
        if (stateKey.startsWith("game_over")) {
            button.classList.add("danger");
        }
        
        // Adiciona o evento de clique para avançar na história
        button.addEventListener("click", () => updateGame(choice.target));
        choicesContainer.appendChild(button);
    });
}

// Inicia o jogo assim que a página carregar
window.onload = () => {
    updateGame("inicio");
};
