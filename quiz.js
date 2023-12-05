const cards = {
  copas: 
    ['assets/baralho/1/back.png',
    'assets/baralho/1/Ah.png',
    'assets/baralho/1/2h.png',
    'assets/baralho/1/3h.png',
    'assets/baralho/1/4h.png',
    'assets/baralho/1/5h.png',
    'assets/baralho/1/6h.png',
    'assets/baralho/1/7h.png',
    'assets/baralho/1/8h.png',
    'assets/baralho/1/9h.png',
    'assets/baralho/1/Th.png',
    'assets/baralho/1/Jh.png',
    'assets/baralho/1/Qh.png',
    'assets/baralho/1/Kh.png'],
  paus: 
    ['assets/baralho/1/back.png',
    'assets/baralho/1/Ac.png',
    'assets/baralho/1/2c.png',
    'assets/baralho/1/3c.png',
    'assets/baralho/1/4c.png',
    'assets/baralho/1/5c.png',
    'assets/baralho/1/6c.png',
    'assets/baralho/1/7c.png',
    'assets/baralho/1/8c.png',
    'assets/baralho/1/9c.png',
    'assets/baralho/1/Tc.png',
    'assets/baralho/1/Jc.png',
    'assets/baralho/1/Qc.png',
    'assets/baralho/1/Kc.png'],
  espadas:
    ['assets/baralho/1/back.png',
    'assets/baralho/1/As.png',
    'assets/baralho/1/2s.png',
    'assets/baralho/1/3s.png',
    'assets/baralho/1/4s.png',
    'assets/baralho/1/5s.png',
    'assets/baralho/1/6s.png',
    'assets/baralho/1/7s.png',
    'assets/baralho/1/8s.png',
    'assets/baralho/1/9s.png',
    'assets/baralho/1/Ts.png',
    'assets/baralho/1/Js.png',
    'assets/baralho/1/Qs.png',
    'assets/baralho/1/Ks.png'],
  ouros:
    ['assets/baralho/1/back.png',
    'assets/baralho/1/Ad.png',
    'assets/baralho/1/2d.png',
    'assets/baralho/1/3d.png',
    'assets/baralho/1/4d.png',
    'assets/baralho/1/5d.png',
    'assets/baralho/1/6d.png',
    'assets/baralho/1/7d.png',
    'assets/baralho/1/8d.png',
    'assets/baralho/1/9d.png',
    'assets/baralho/1/Td.png',
    'assets/baralho/1/Jd.png',
    'assets/baralho/1/Qd.png',
    'assets/baralho/1/Kd.png']
}

const perguntas = [
  {
    pergunta: 
      ["Situação 1: Hero open CO, BB paga.",
      "Situação 2: Hero open CO, SB paga, BB paga.",
      "Situação 3: Hero open CO, BTN paga, BB paga."],
    flop: 
      [cards.copas[13],cards.ouros[8],cards.copas[7]],
    mao: 
      [cards.copas[1],cards.paus[13],cards.espadas[3],cards.copas[3],cards.paus[2]],
    opcoes: ['BET', 'CHECK','FUJA'],
    respostaCorreta: 0,
    explicacao: 
      ['Betamos por ter o K na mão. Se temos a Q no lugar do K também podemos betar vs BB.',
      'Betamos por ter o K na mão. Se temos a Q no lugar do K não iremos betar.',
      'Betamos por ter o K na mão. Se temos a Q no lugar betamos somento no HU vs BB.']
  },
  {
    pergunta: 
      ["TESTE 1/2",
      "TESTE 2/2"],
    flop: 
      [cards.copas[13],cards.ouros[8],cards.copas[7]],
    mao: 
      [cards.ouros[1],cards.paus[12],cards.copas[10],cards.ouros[6],cards.espadas[3]],
    opcoes: ['BET', 'CHECK','FUJA'],
    respostaCorreta: 1,
    explicacao: 
      ['Quando temos BD NFD pegamos mais a free card com mãos medianas. Faltam blockers para a CBET.',
      'BLA BLA BLA']
  },
  {
    pergunta: 
      ["Situação 1: TESTE SO TEM 1"],
    flop: 
      [cards.copas[13],cards.ouros[8],cards.copas[7]],
    mao: 
      [cards.paus[1],cards.espadas[10],cards.ouros[10],cards.espadas[7],cards.espadas[5]],
    opcoes: ['BET', 'CHECK'],
    respostaCorreta: 1,
    explicacao: 
      ['Podemos cbetar HU por ter o blocker do straight (TT) e o 7 que bloqueia 2 pares. No turn, mandamos mais 1 na dobra do 7, no 6, no 9 e J.']
  }
];

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
  
  // const perguntasHTML = document.getElementById('question').getElementsByTagName('p');
  // for (let i = 0; i < perguntasHTML.length; i++) {
  //   perguntasHTML[i].textContent = questao.pergunta[i];
  // }
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