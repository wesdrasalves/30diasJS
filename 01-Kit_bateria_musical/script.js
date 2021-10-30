function loadScript(){
  window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const keyButton = document.querySelector(`.key[data-key="${e.code}"]`);

    if(!audio) return // Para a execução da função pois apertou uma tecla não configurada
  
    audio.currentTime = 0;
    audio.play();

    if(!keyButton.classList.contains('lock')){
      keyButton.classList.add('playing');
    }
  })

  const keys = document.querySelectorAll('.key');

  function removeClassPlay(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');

    if(!this.classList.contains('lock')){
      this.classList.add('lock');
    }
    else  {
      this.classList.remove('lock');
    }
  }

  keys.forEach(key => key.addEventListener('transitionend', removeClassPlay))
}

window.onload = loadScript;
