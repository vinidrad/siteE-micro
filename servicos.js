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