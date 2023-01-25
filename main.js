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
  "O desespero é o que move as pessoas, não a esperança."
]

cookie.addEventListener('click', handleOpenCookie)
newCookie.addEventListener('click', handleNewCookie)



function setMessage(){
  return frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)]
}


function handleOpenCookie() {
  handleToggleScreen()
  console.log("abrir")
  setMessage()
  console.log(setMessage())
  message.innerHTML = `${setMessage()}`
}

function handleNewCookie(){
  handleToggleScreen()
}

function handleToggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}