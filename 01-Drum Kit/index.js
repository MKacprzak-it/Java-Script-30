
function removeTransition(e) {
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//wybieramy taki element audio ktorego data-key pasuje do e.keyCode(ASCII?);data-key->bardzo przydatne do tworzenia własny tagów
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;//jesli nie ma to nic sie nie stanie
    key.classList.add('playing');//transform
    audio.currentTime = 0;//kazde wcisniecie odpala dzwiek na nowo, swoiste opoznienie w tym przypadku zerowe
    audio.play();
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));//transitionend->do css jesli key zostanie przetransformowany to funkcja removeTransition
  window.addEventListener('keydown', playSound);
  //nacisniecie klawisza(keydown) odpala funkcje playSound
  // nie mozna this bo przekazujemy key a window(które byłoby this)