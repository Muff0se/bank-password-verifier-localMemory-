document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('meuAudio');

    function tocarAudio() {
      audio.play();
      document.removeEventListener('click', tocarAudio);
    }

    document.addEventListener('click', tocarAudio);
});

const blocker = document.querySelector('.blocker');

blocker.addEventListener('animationend', () => {
    blocker.remove();
});

function voltar() {
    window.location.href = "../index.html";
}
