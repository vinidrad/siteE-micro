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






