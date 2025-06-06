import outSideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdown = document.querySelectorAll('[data-dropdown]');

  dropdown.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
}