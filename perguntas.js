
window.perguntas = [
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
