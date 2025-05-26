
ANA LIVIA KLEINER <ana.kleiner@escola.pr.gov.br>
10:07 (há 0 minuto)
para mim

const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: ["Alternativa1
            {
            texto:"texto aternativa 1", 
            afirmação:"afirmacao 1"},
        
            {
            texto:"texto aternativa 2", 
            afirmação:"afirmacao 2"},
        ]
    },
    {
      enunciado: "Pergunta 1",
        alternativas: ["Alternativa1
            {
            texto:"texto aternativa 1", 
            afirmação:"afirmacao 1"},
        
            {
            texto:"texto aternativa 2", 
            afirmação:"afirmacao 2"},
        ]  
    }
];

let atual = 0;
let perguntaAtual;

function mostrarPergunta(){
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostrarPergunta()
