
import cards from './cartas.js';
import perguntas from './perguntas.js';

function embaralharPerguntas() {
  for (let i = perguntas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
  }
}

let perguntaAtual = 0;
let pontuacao = 0;
let situacao = 0;
let totalRespondidas = 0;

function exibirPergunta() {

  const questao = perguntas[perguntaAtual];
  const perguntasHTML = document.getElementById('question').getElementsByTagName('p');

  perguntasHTML[0].textContent = questao.pergunta[situacao];
 
  const flopImgHTML = document.getElementById('flop').getElementsByTagName('img');
  for (let i = 0; i < flopImgHTML.length; i++) {
    flopImgHTML[i].src = questao.flop[i];
  }
  const maoImgHTML = document.getElementById('mao').getElementsByTagName('img');
  for (let i = 0; i < maoImgHTML.length; i++) {
    maoImgHTML[i].src = questao.mao[i];
  }
  const opcoesHTML = document.getElementById('options').getElementsByTagName('button');
  for (let i = 0; i < opcoesHTML.length; i++) {
    opcoesHTML[i].textContent = questao.opcoes[i];
        if (questao.opcoes.length > 2){
      opcoesHTML[2].style.display = 'block'
    } else {
      opcoesHTML[2].style.display = 'none'
    }
  }
   

}

function responder(opcao) {
    const questao = perguntas[perguntaAtual];
    const feedback = document.getElementById('feedback');
    const feedback1 = document.getElementById('feedback1');
    const feedback2 = document.getElementById('feedback2');
    if (opcao === questao.respostaCorreta) {
      feedback.textContent = `Resposta correta!`;
      feedback2.textContent = `${questao.explicacao[situacao]}`;
      feedback.style.backgroundColor = "#8bc34ab5"; 
      feedback.style.padding = "10px"; 
      feedback.style.borderRadius = "5px"; 
      feedback.style.color = "white";
      // feedback2.style.color = 'gray';
      document.getElementById('feedback').style.display = 'block';
      document.getElementById('feedback1').style.display = 'none';
      document.getElementById('feedback2').style.display = 'block';
      pontuacao++;
      totalRespondidas++;
    } else {
      feedback.textContent = `Resposta errada!`;
      feedback1.textContent = `Alternativa correta: ${questao.opcoes[questao.respostaCorreta]}.`;
      feedback2.textContent = `${questao.explicacao[situacao]}`;
      feedback.style.background = "#ff000085";
      feedback.style.padding = "10px";
      feedback.style.borderRadius = "5px"; 
      feedback.style.color = "white";
      document.getElementById('feedback').style.display = 'block';
      document.getElementById('feedback1').style.display = 'block';
      document.getElementById('feedback2').style.display = 'block';
      totalRespondidas++;
    }
    document.getElementById('labelInfomativo').style.display = 'none';
    document.getElementById('next').style.display = 'block';
    document.getElementById('options').style.display = 'none';
}



function proximaQuestao() {
  const questao = perguntas[perguntaAtual];
  if(situacao != (questao.pergunta.length - 1)){
    situacao++;
    exibirPergunta();
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback1').textContent = '';
    document.getElementById('feedback2').textContent = '';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback1').style.display = 'none';
    document.getElementById('feedback2').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    // document.getElementById('options').style.display = 'block';
    document.getElementById('options').style.display = 'grid';
    document.getElementById('labelInfomativo').style.display = 'block';
    
  } else {
    perguntaAtual++;
    situacao = 0;
    if (perguntaAtual < perguntas.length) {
      exibirPergunta();
      document.getElementById('feedback').textContent = '';
      document.getElementById('feedback1').textContent = '';
      document.getElementById('feedback2').textContent = '';
      document.getElementById('feedback').style.display = 'none';
      document.getElementById('feedback1').style.display = 'none';
      document.getElementById('feedback2').style.display = 'none';
      document.getElementById('next').style.display = 'none';
      // document.getElementById('options').style.display = 'block';
      document.getElementById('options').style.display = 'grid';
      document.getElementById('labelInfomativo').style.display = 'block';
    } else {
      const quiz = document.getElementById('quiz');
      quiz.innerHTML = `<div style="background: #000000d1;width: auto;font-size: 45px;padding: 25px;margin-top: 18%;margin-left: auto;margin-right: auto;width: 39%;border-radius: 13px;font-weight: 800;color: white;"><h2>Acabou mane!</h2>
                        <p>Você acertou ${pontuacao} de ${totalRespondidas} questões.</p></div>`;
    }
  }
  
}

embaralharPerguntas();
exibirPergunta();


