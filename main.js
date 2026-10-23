/* Progressive enhancement: the artwork and all editorial content exist without JS. */
(() => {
  const slider = document.querySelector('#reveal');
  const print = document.querySelector('#print-window');
  const output = document.querySelector('#reveal-value');
  const controls = document.querySelector('.reveal-controls');
  if (!slider || !print || !output || !controls) return;

  function updatePrint() {
    const value = Number(slider.value);
    print.style.setProperty('--reveal', `${value}%`);
    output.value = `${value}%`;
    slider.setAttribute('aria-valuetext', `${value} percent blue layer revealed`);
  }

  slider.addEventListener('input', updatePrint);
  updatePrint();
  controls.hidden = false;
})();
