$(document).ready(function() {
  $('#audio-button').click(function() {
    playAudio();
  });
});

function playAudio() {
  var audio = new Audio('/audios/easy.mp3');
  audio.play();
}
