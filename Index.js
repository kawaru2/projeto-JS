// CARREGAR AS MENSAGENS INICIAIS UTILIZANDO VARIÁVEIS
let id;
let indexColor = 0;
const listColors = ["#FF2ECC", "#FF101F", "#3B28CC", "#FF9B71", "#8EEDF7"];
const btnEvent = document.querySelector(".btnAcao");

function createTittle(name) {
  const message = document.querySelector("#msgPrincipal");
  message.textContent = `Olá, ${name}! ♥️`
  return message.textContent
}

function createDescription(content) {
  document.querySelector("#descricao").innerHTML = content
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
  const structure = `
<div class="carousel">
  <div class="slides">
    <img src="./images/foto1.svg" class="active">
    <img src="./images/foto2.svg">
    <img src="./images/foto3.svg">
    <img src="./images/foto4.svg">
    <img src="./images/foto5.svg">
    <img src="./images/foto6.svg">
    <img src="./images/foto7.svg">
    <img src="./images/foto8.svg">
    <img src="./images/foto9.svg">
    <img src="./images/foto10.svg">
  </div>
  <div class="thumbnails">
    <img src="./images/foto1.svg" data-index="0">
    <img src="./images/foto2.svg" data-index="1">
    <img src="./images/foto3.svg" data-index="2">
    <img src="./images/foto4.svg" data-index="3">
    <img src="./images/foto5.svg" data-index="4">
    <img src="./images/foto6.svg" data-index="5">
    <img src="./images/foto7.svg" data-index="6">
    <img src="./images/foto8.svg" data-index="7">
    <img src="./images/foto9.svg" data-index="8">
    <img src="./images/foto10.svg" data-index="9">
  </div>
</div>
`;
  const tagCarousel = document.createElement("div")
  tagCarousel.innerHTML = structure
  tagCarousel.classList.add("teste")
  
  const slides = tagCarousel.querySelector(".slides");
  const thumbs = tagCarousel.querySelectorAll(".thumbnails img");
  
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const index = parseInt(thumb.dataset.index);
      slides.style.transform = `translateX(-${index * 100}vw)`;
      
      thumbs.forEach(thumbnail => {thumbnail.classList.remove("active")});
      thumb.classList.add("active");
      
    })
  })
  
  return tagCarousel
}
  
// FOTOS NOSSAS COM ALGUNS EVENTOS DE CLICK

function createTag(tagName, tagHTML) {
  const newTag = document.createElement(tagName);
  newTag.innerHTML = tagHTML
  return newTag;
}

//  EVENT

function eventClickOnButton() {
  const button = document.querySelector(".btnAcao")
  if(button.classList.contains("eventActive")) {
    button.classList.remove("eventActive")
    button.classList.add("eventDesactive")
    button.textContent = "MOSTRAR"
    return;
  }
  button.classList.remove("eventDesactive")
  button.classList.add("eventActive")
  button.textContent = "ESCONDER"
}

function eventAnimationHeart(heart) {
  heart.addEventListener('click', () => {
    heart.classList.toggle('rotate')
  })
}

// CODAR UM SET TIME PARA MUDAR AS CORES DAS PALAVRAS (CSS)

function changeAnimation() {
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
  createTittle("Sara")
  createDescription('Quero lhe entregar esse presente utilizando um pouquinho de conhecimento da área da tecnologia, espero que goste <span id="emoji">♥️</span>')
  
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
      changeAnimation()
      lastContentRender(to)
    }, 9000)
    id = true
  } else if (id) {
    to.innerHTML = ""
    id = false
  }
}

function eventLastContentRender() {
  const listPhotos = document.querySelectorAll(".itemListaFoto")
  listPhotos.forEach(photo => {
    photo.addEventListener("click", () => {
      photo.classList.toggle("scale")
    })
  })
}

function lastContentRender(to) {
  const listPhotos = document.createElement("ul");
  const bigHeart = document.createElement("img");
  
  bigHeart.src = "./images/heart.svg"
  bigHeart.classList.add("heart")
  
  listPhotos.classList.add("listaFotos")
  listPhotos.innerHTML = `
<li class="itemListaFoto"><img src="./images/conteudoFoto1.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto2.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto3.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto4.jpeg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto5.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto6.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto7.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto8.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto9.jpg"></li>
<li class="itemListaFoto"><img src="./images/conteudoFoto10.jpg"></li>
`

  const lastText = document.createElement("p");
  const poema = `
O amor é fogo que arde sem se ver,
é ferida que dói e não se sente;<br>
É um contentamento descontente,
é dor que desatina sem doer.
`
  lastText.classList.add("lastText")
  lastText.innerHTML = `
Você é uma pessoa incrível!
Eu sou a pessoa mais sortuda do mundo. Eu ganhei na loteria, mas o meu prêmio não foi dinheiro, pois eu ganhei na loteria do amor, tive a grande sorte de ganhar o seu amor. Muitos piratas procuram pelo baú do tesouro, infelizmente pra eles só haverá o baú, pois o tesouro está comigo, é você, meu amor! Meu amor, é curioso que conversamos todos os dias mas, de qualquer forma, sinto muito a sua falta... Eu não sei mais o que dizer, eu já falei tantas coisas, mas eu quero que saiba que o meu amor por você só cresce, todos os dias eu me surpreendo pelo tamanho dele. Eu quero deixar uma pequena parte de uma poesia, eu penso nela todos os dias pois é ela que me faz lembrar do meu amor por você, e diz assim:<br><span id="poema">"${poema}"<br>Luís Vaz de Camões.</span>
` // Ainda vou escrever à mão essa parte.

to.appendChild(listPhotos)
to.appendChild(bigHeart)
to.appendChild(lastText)

eventLastContentRender()
eventAnimationHeart(bigHeart)

}

btnEvent.addEventListener("click", eventRender)
btnEvent.addEventListener("click", eventClickOnButton)

window.onload = render