const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para se referir a um arquivo de script externo chamado 'script.js'?",
        respostas: [
            "<script src='script.js'></script>",
            "<script name='script.js'></script>",
            "<script href='script.js'></script>"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 10;",
            "let myVar = 10;",
            "const myVar = 10;"
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'getElementById()' faz no JavaScript?",
        respostas: [
            "Retorna o primeiro elemento com a classe especificada",
            "Retorna o primeiro elemento com o ID especificado",
            "Retorna o primeiro elemento com o nome especificado"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dos seguintes é um operador de comparação em JavaScript?",
        respostas: [
            "==",
            "&&",
            "="
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
        respostas: [
            "Adiciona um evento ao elemento especificado",
            "Remove um evento do elemento especificado",
            "Substitui um evento no elemento especificado"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "*",
            "-"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'querySelector()' faz em JavaScript?",
        respostas: [
            "Retorna o primeiro elemento que corresponde a um seletor especificado no documento",
            "Retorna todos os elementos que correspondem a um seletor especificado no documento",
            "Retorna o último elemento que corresponde a um seletor especificado no documento"
        ],
        correta: 0
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
        respostas: [
            "10",
            "55",
            "Erro"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
        respostas: [
            "Arredonda um número para o inteiro mais próximo",
            "Formata um número com uma quantidade específica de casas decimais",
            "Retorna o valor absoluto de um número"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');
 // APPENDCHILD = COLOCAR UM FILHO

 const corretas = new Set()
 const totalDePerguntas = perguntas.length
 const mostrarTotal = document.querySelector('#acertos span')
 

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(const resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

         dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`
         }

        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem);
}

