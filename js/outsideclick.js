export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {html.addEventListener(userEvent, handleClickOutside)})
    })
    element.setAttribute(outside, '')
  }

  function handleClickOutside(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside)
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside)
      });
      callback();
    }
  }
}