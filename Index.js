// CARREGAR AS MENSAGENS INICIAIS UTILIZANDO VARIÁVEIS
let id;
let indexColor = 0;
const listColors = ["darkred", "darkblue", "purple", "green", "orange"];

function createTittle(name) {
  const message = document.querySelector("#msgPrincipal");
  message.textContent = `Olá, ${name}! ♥️`
  return message.textContent
}

function createDescription(content) {
  document.querySelector("#descricao").textContent = content
}
// EXECUTAR UMA FUNÇÃO QUE ESPERA UM EVENTO DE CLICK E RENDERIZA O CONTEUDO/ANIMAÇÃO.
function contentEvent(nickname) {
  const message = `Oi meu amor, sou eu, o João!
  Esta é uma lembrança do meu amor e carinho por você. É bem simples mas é de coração.
  Você não faz ideia do tamanho do meu amor por você, tenha certeza de que não é pequeno. Quero deixar uma frase que marcou MUITO a nossa volta, a nossa reaproximação: "Tudo no tempo de Deus!".`;
  const loveMessage = `Eu te amo, meu amor, minha ${nickname}! ♥️`;
  const carousel = createCarousel();
  const lastMessage = '<span Class="euTeAmo">EU </span><span Class="euTeAmo">TE </span><span Class="euTeAmo">AMO</span>'
  return [message, loveMessage, carousel, lastMessage];
}

  // CARROSSEL COM FOTOS NOSSAS
  
function createCarousel() {
  const structure = `<div class="carousel>"
  <div class="slides">
    <img src="./images/foto1.jpg" class="active">
    <img src="./images/foto2.jpg">
    <img src="./images/foto3.jpg">
  <div class="thumbnails">
    <img src="./images/foto1.jpg" data-index="0">
    <img src="./images/foto2.jpg" data-index="1">
    <img src="./images/foto3.jpg" data-index="2">`;
  const tagCarousel = createTag("div", structure)
  tagCarousel.classList.add("teste")
  return tagCarousel
}
  
// FOTOS NOSSAS COM ALGUNS EVENTOS DE CLICK

function createTag(tagName, tagHTML) {
  const newTag = document.createElement(tagName);
  newTag.innerHTML = tagHTML
  return newTag;
}
// CODAR UM SET TIME PARA MUDAR AS CORES DAS PALAVRAS (CSS)

function changeColorAnimation() {
  const listPhrase = document.querySelectorAll(".euTeAmo");
  setInterval(() => {
    listPhrase.forEach(content => {
      content.style.color = listColors[indexColor]
    });
    indexColor = (indexColor + 1) % listColors.length;
  }, 1000)
}

// RENDER
function render() {
  const to = document.querySelector("#conteudo");
  const listMessages = contentEvent("Sarita");
  createTittle("Sara")
  createDescription("Quero lhe entregar esse presente utilizando um pouquinho de conhecimento da área da tecnologia, espero que goste ♥️")
  
}

function eventRender() {
  const listMessages = contentEvent("Sarita");
  const to = document.querySelector("#conteudo");
  let i = 0;
  
  if (!id) {
    for(let i = 0; i < listMessages.length; i++) {
      if(i === 2){ // É A POSIÇÃO DO CARROSSEL
        setTimeout(() => {
          to.appendChild(listMessages[i])
        }, 6000)
        continue; // PULA PARA A PRÓXIMA ITERAÇÃO.
      }
      setTimeout(() => {
        to.appendChild(createTag("p", listMessages[i]))
      }, i * 3000)
    }
    setTimeout(() => { // TEMPO PARA EXECUTAR A FUNÇÃO DE ANIMAÇÃO DE TROCA DAS CORES.
      changeColorAnimation()
    }, 9000)
    id = true
  } else if (id) {
    to.innerHTML = ""
    id = false
  }
  
}

const btnEvent = document.querySelector("#btnAcao")

btnEvent.addEventListener("click", eventRender)

window.onload = render