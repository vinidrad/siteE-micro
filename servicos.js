const cards = document.querySelectorAll('.card');
const dots = document.querySelector('.dots');

let current = 0;

cards.forEach((_,i)=>{
    const dot = document.createElement('span');

    dot.addEventListener('click',()=>{
        current = i;
        update();
    });

    dots.appendChild(dot);
});

function update(){

    cards.forEach((card,index)=>{

        let offset = index - current;

        if(offset > cards.length/2)
            offset -= cards.length;

        if(offset < -cards.length/2)
            offset += cards.length;

        let transform = '';

        if(offset === 0){

            transform = `
            translate(-50%,-50%)
            translateX(0)
            scale(1)
            `;

            card.style.opacity = '1';
            card.style.zIndex = '5';
        }

        else if(offset === -1){

            transform = `
            translate(-50%,-50%)
            translateX(-290px)
            rotateY(18deg)
            scale(.9)
            `;

            card.style.opacity = '.55';
            card.style.zIndex = '4';
        }

        else if(offset === 1){

            transform = `
            translate(-50%,-50%)
            translateX(290px)
            rotateY(-18deg)
            scale(.9)
            `;

            card.style.opacity = '.55';
            card.style.zIndex = '4';
        }

        else if(offset === -2){

            transform = `
            translate(-50%,-50%)
            translateX(-360px)
            scale(.85)
            `;

            card.style.opacity = '.15';
            card.style.zIndex = '2';
        }

        else if(offset === 2){

            transform = `
            translate(-50%,-50%)
            translateX(360px)
            scale(.85)
            `;

            card.style.opacity = '.15';
            card.style.zIndex = '2';
        }

        else{

            transform = `
            translate(-50%,-50%)
            scale(.7)
            `;

            card.style.opacity = '0';
            card.style.zIndex = '0';
        }

        card.style.transform = transform;
    });

    document.querySelectorAll('.dots span')
    .forEach((dot,i)=>{
        dot.classList.toggle('active',i===current);
    });
}

update();

setInterval(()=>{
    current = (current + 1) % cards.length;
    update();
},5000);



const itens = document.querySelectorAll(".item");
const barra = document.querySelector(".progresso");
const barraContainer = document.querySelector(".barra");

let progresso = 0;

const duracaoTotal = 20600; // tempo total do ciclo
const step = 50;

let intervalo;

// função para ativar conteúdo
function ativar(index){
  itens.forEach(i => i.classList.remove("ativo"));
  itens[index].classList.add("ativo");
}

// loop principal
function iniciar(){

  clearInterval(intervalo);

  intervalo = setInterval(() => {

    progresso += (step / duracaoTotal) * 100;

    barra.style.width = progresso + "%";

    if(progresso < 30){
      ativar(0);
    }
    else if(progresso < 60){
      ativar(1);
    }
    else if(progresso < 90){
      ativar(2);
    }
    else{
      ativar(3);
    }

    if(progresso >= 100){
      progresso = 0;
    }

  }, step);
}

// clique na barra
barraContainer.addEventListener("click", (e) => {

  const rect = barraContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;

  const porcento = x / rect.width;

  progresso = porcento * 100;

  barra.style.width = progresso + "%";

  if(progresso < 25) ativar(0);
  else if(progresso < 50) ativar(1);
  else if(progresso < 75) ativar(2);
  else ativar(3);

  iniciar(); // reinicia o fluxo corretamente
});

// start
ativar(0);
iniciar();