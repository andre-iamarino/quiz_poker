
const perguntas = []; // Array vazio para armazenar as perguntas

fetch('dados/dados.json')
    .then(response => response.json())
    .then(data => {
        // Preencher o array de perguntas com os dados do JSON
        console.log("passou1");
        data.forEach(item => {
            perguntas.push({
                pergunta: item.pergunta,
                flop: item.flop,
                mao: item.mao,
                opcoes: item.opcoes,
                respostaCorreta: item.respostaCorreta,
                explicacao: item.explicacao
            });
        });

        // Aqui você pode realizar qualquer ação que dependa do preenchimento do array perguntas
        console.log("carregou " + perguntas); // Exemplo: exibir o array preenchido
        console.log("passou2");
        embaralharPerguntas();
        console.log("passou3");
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });


function embaralharPerguntas() {
  console.log("passou4");  
  for (let i = perguntas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
    console.log("passou5");
    exibirPergunta();
    console.log("passou6");
  }

let perguntaAtual = 0;
let pontuacao = 0;

function exibirPergunta() {
  console.log("passou7");
  const questao = perguntas[perguntaAtual];
  document.getElementById('question').textContent = questao.pergunta;
  const opcoesHTML = document.getElementById('options').getElementsByTagName('button');
  for (let i = 0; i < opcoesHTML.length; i++) {
    opcoesHTML[i].textContent = questao.opcoes[i];
  }


  const flopImgHTML = document.getElementById('flop').getElementsByTagName('img');
  for (let i = 0; i < flopImgHTML.length; i++) {
    flopImgHTML[i].src = questao.flop[i];
  }
  const maoImgHTML = document.getElementById('mao').getElementsByTagName('img');
  for (let i = 0; i < maoImgHTML.length; i++) {
    maoImgHTML[i].src = questao.mao[i];
  }

 

}

function responder(opcao) {
  console.log("passou8");
    const questao = perguntas[perguntaAtual];
    const feedback = document.getElementById('feedback');
    const feedback1 = document.getElementById('feedback1');
    const feedback2 = document.getElementById('feedback2');
    if (opcao === questao.respostaCorreta) {
      feedback.textContent = `Resposta correta!`;
      feedback2.textContent = `${questao.explicacao}`;
      feedback.style.backgroundColor = "#8bc34ab5"; 
      feedback.style.padding = "10px"; 
      feedback.style.borderRadius = "5px"; 
      feedback.style.color = "white";
      feedback2.style.color = 'gray';
      document.getElementById('feedback').style.display = 'grid';
      document.getElementById('feedback1').style.display = 'none';
      document.getElementById('feedback2').style.display = 'grid';
      pontuacao++;
    } else {
      feedback.textContent = `Resposta errada!`;
      feedback1.textContent = `Alternativa correta: ${questao.opcoes[questao.respostaCorreta]}.`;
      feedback2.textContent = `${questao.explicacao}`;
      feedback.style.background = "#ff000085";
      feedback.style.padding = "10px";
      feedback.style.borderRadius = "5px"; 
      feedback.style.color = "white";
      document.getElementById('feedback').style.display = 'grid';
      document.getElementById('feedback1').style.display = 'grid';
      document.getElementById('feedback2').style.display = 'grid';
    }
    document.getElementById('labelInfomativo').style.display = 'none';
    document.getElementById('next').style.display = 'grid';
    document.getElementById('options').style.display = 'none';
}

function mudarBackground() {
  const imagens = [
    "url('https://img.freepik.com/fotos-gratis/fichas-de-cassino-empilhadas-e-royal-flush-em-fundo-verde_23-2148952342.jpg?w=1380&t=st=1700658878~exp=1700659478~hmac=7dfa64fc91c74120ceb97c32b74641ee8852e5a1b7194ff1371f864f1f749c64')",
    "url('https://img.freepik.com/vetores-gratis/fichas-de-simbolo-de-casino-premium-de-ouro_1017-30141.jpg?w=1380&t=st=1700663293~exp=1700663893~hmac=9da35c82680898ca3e9c92543a51c9fa7328e3d1ca0d73d5e65495e098b41a0e')",
    "url('https://img.freepik.com/fotos-gratis/sorte-e-riqueza-garantem-uma-noite-de-sucesso-no-cassino-gerada-pela-ia_188544-55835.jpg?w=1380&t=st=1700663940~exp=1700664540~hmac=0a9e3f5b8fc8941dad8b457226a2aeec358cc14242bd38ddcec8395772d51ecd')",
    "url('https://img.freepik.com/fotos-premium/o-crupie-de-menina-baralha-cartas-de-poquer-em-um-cassino_96270-21.jpg?w=1380')",
    "url('https://img.freepik.com/fotos-gratis/cartas-e-fichas-de-poquer-na-mesa-verde_93675-132861.jpg?w=1380&t=st=1700664014~exp=1700664614~hmac=6cef46b6225cc0de00fc81a8a210bc2580faed8841810e2f669031f9f8d47213')",
    "url('https://img.freepik.com/fotos-premium/cartoes-e-fichas-texas-poker-hold39em-poker-online-player39s-smartphone-na-mesa-de-poker-sala-de-poker-jogo-de-poker-jogos-de-cartas-de-casino-online-estilo-de-revista-de-design-moderno_771426-1942.jpg?w=1380')",
    "url('https://www.shutterstock.com/shutterstock/photos/583864891/display_1500/stock-photo-casino-gambling-poker-people-and-entertainment-concept-close-up-of-poker-player-with-chips-at-583864891.jpg')",
    "url('https://img.freepik.com/vetores-gratis/simbolos-de-baralho-de-cassino-fundo-preto_1017-20656.jpg?w=1380&t=st=1700663267~exp=1700663867~hmac=166c070ee1519976b9184f329e71aff1aa30f0a18ee986f8078c536049efda7b')"
  ];

  const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

  document.body.style.backgroundImage = imagemAleatoria;
}

function proximaQuestao() {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    exibirPergunta();
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback1').textContent = '';
    document.getElementById('feedback2').textContent = '';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback1').style.display = 'none';
    document.getElementById('feedback2').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('options').style.display = 'grid';
    document.getElementById('labelInfomativo').style.display = 'grid';
  } else {
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = `<div style="background: #000000d1;width: auto;font-size: 45px;padding: 25px;margin-top: 18%;margin-left: auto;margin-right: auto;width: 39%;border-radius: 13px;font-weight: 800;color: white;"><h2>Acabou mane!</h2>
                      <p>Você acertou ${pontuacao} de ${perguntas.length} questões.</p></div>`;
  }
}


