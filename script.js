function copyToClipboard(button, text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  button.textContent = '\u2713';
  button.classList.remove('copy-button');
  button.classList.add('copied');
  setTimeout(() =>  {
    button.textContent = 'Copiar Comando'
    button.classList.remove('copied');
    button.classList.add('copy-button');
  }, 2000);
}
