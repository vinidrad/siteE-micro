const imagens = document.querySelectorAll(".slides img");
let index = 0;

setInterval(() => {
  imagens[index].classList.remove("ativo");

  index = (index + 1) % imagens.length;

  imagens[index].classList.add("ativo");
}, 3000);

const botao = document.querySelector(".flooat");

window.addEventListener("scroll", () => {
  const scrollAtual = window.innerHeight + window.scrollY;
  const alturaPagina = document.body.offsetHeight;

  // quando faltar 200px pro final
  if (scrollAtual >= alturaPagina - 200) {
    botao.classList.add("hide");
  } else {
    botao.classList.remove("hide");
  }
});