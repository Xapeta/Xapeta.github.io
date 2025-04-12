export default function initModal() {
  const container = document.querySelector('[data-modal="container"]');
  const btn = document.querySelector('[data-modal="btn"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');

  function handleClick(event) {
    event.preventDefault();
    container.classList.toggle('active');
  }

  function fecharModal(event) {
    if (event.target === this) {
      handleClick(event);
    }
  }

  btn.addEventListener('click', handleClick);
  btnFechar.addEventListener('click', handleClick);
  container.addEventListener('click', fecharModal);
}
