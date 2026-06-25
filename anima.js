const elementos = document.querySelectorAll(".animar, .animar2");

function aparecer() {
  const alturaTela = window.innerHeight;

  elementos.forEach((el) => {
    const rect = el.getBoundingClientRect();

    // anima quando estiver visível
    if (rect.top < alturaTela - 100 && rect.bottom > 100) {
      el.classList.add("ativo");
    } else {
      el.classList.remove("ativo");
    }
  });
}

window.addEventListener("scroll", aparecer);
aparecer();

tsParticles.load("particles", {
    fullScreen: {
        enable: false
    },

    particles: {
        number: {
            value: 150
        },

        color: {
            value: "#4d8dff"
        },

        links: {
            enable: true,
            distance: 180,
            color: "#4d8dff",
            opacity: 0.35,
            width: 1
        },

        move: {
            enable: true,
            speed: 0.8
        },

        opacity: {
            value: 0.8
        },

        size: {
            value: {
                min: 1,
                max: 3
            }
        }
    }
});



function mostrar(id, botao){

    document.querySelectorAll(".info")
        .forEach(el => el.classList.remove("ativo"));

    document.getElementById(id)
        .classList.add("ativo");

    document.querySelectorAll(".tab")
        .forEach(btn => btn.classList.remove("active"));

    botao.classList.add("active");
}



const header = document.querySelector("header");
const darkSection = document.querySelector(".dark-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            header.classList.add("dark");
        } else {
            header.classList.remove("dark");
        }

    });

}, {
    threshold: 0.2
});

observer.observe(darkSection);
