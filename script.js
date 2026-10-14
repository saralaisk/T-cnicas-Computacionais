const perguntas = [
    "A Inteligência Artificial ajuda ou atrapalha o aprendizado?",
    "Como podemos usar a IA de maneira responsável na escola?",
    "Podemos confiar em todas as respostas dadas por uma IA?",
    "Quais são os benefícios da IA para os estudantes?",
    "Quais problemas podem surgir com o uso excessivo da IA?",
    "A IA pode substituir o professor? Por quê?",
    "Como a IA pode ajudar na criatividade dos alunos?"
];

function novaPergunta() {
    const numero = Math.floor(Math.random() * perguntas.length);

    document.getElementById("pergunta").textContent =
        perguntas[numero];
}
