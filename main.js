const cookie = document.querySelector('#biscoito')
const newCookie =  document.querySelector('#new')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const message = document.querySelector('#message')


const frasesMotivacionais = [
  "Tudo pode dar errado se você tentar. Mas se não fizer nada, tudo ficará igual.",
  "A mãe da frustração é você acreditar que pode realizar seus sonhos sem ser herdeiro.",
  "O meu trabalho dos sonhos seria ganhar para dormir. Enquanto não chego lá, me frustro com todos os outros trabalhos.",
  "Abandone antes de tentar e evite maiores frustrações.",
  "Não tem como subir a ladeira que se transformou a vida com as suas pernas fracas.",
  "Pode ser que seu propósito na vida seja nunca vencer, apenas viver de tentativa.",
  "O importante é acreditar na derrota e talvez se surpreender com a vitória.",
  "A esperança já te fez fazer coisas doidas e que você se arrependeu. Então, não tenha esperança em nada.",
  "O desespero é o que move as pessoas, não a esperança.",
  "Não se desanime com a derrota de hoje, porque amanhã tem mais.",
  "Por causa de gente como você é que na caixa de ovo vem escrito: 'Contém ovo'.",
  "De longe parece derrotado, de perto parece que está longe.",
  "O segredo do sucesso é fazer o contrário do você está fazendo.",
  "Relaxa, porque daqui para frente é só para trás.",
  "Então sorria, você acordou mais um dia, sorria. Mesmo derrotada, você é abençoada.",
  "Arrisque, tente, lute, mostre para você mesmo o quanto é incapaz.",
  "Tem gente, igual a você, que é igual nuvem. A gente olha e vê um animal.",
  "A verdade dói, mas precisa ser dita: 'Não será desta vez'.",
  "Você é a amizade que minha mãe sempre falou para eu evitar!",
  "É só uma fase ruim, logo vai piorar.",
  "Não sabendo que era impossível, foi lá e soube.",
  "Quando a vida te derrubar, aproveite a chance e tire uma soneca.",
  "Pode sonhar! Mas saiba que os sonhos antecedem os seus fracassos.",
  "Nunca foi azar, sempre foi incompetência!",
  "Tudo passa, até as coisas ruins vão embora para coisas terríveis chegarem.",
  "O problema não está na segunda-feira, está na sua vida.",
  "Acreditar que você consegue já é meio caminho para o fracasso.",
  "Você não pode mudar o seu passado, porém pode estragar seu futuro.",
  "Considere a procrastinação. Quem não faz nada, não erra.",
  "Nunca subestime sua incapacidade.",
  "Quando tudo estiver dando errado, se acostume.",
  "Você é a amizade que minha mãe sempre falou para eu evitar!",
]

cookie.addEventListener('click', handleOpenCookie)
newCookie.addEventListener('click', handleNewCookie)



function setMessage(){
  return frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)]
}


function handleOpenCookie() {
  handleToggleScreen()
  setMessage()
  message.innerHTML = `${setMessage()}`
}

function handleNewCookie(){
  handleToggleScreen()
}

function handleToggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
