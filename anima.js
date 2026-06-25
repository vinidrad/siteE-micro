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