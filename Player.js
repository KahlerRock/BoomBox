
window.onload = function (){
  document.getElementById("loaded").innerHTML = "loaded";
}

function playMusic () {
  console.log("playMusic");
  var player = new window.Audio('https://www.youtube.com/watch?v=p4OHVJxd2FI')
  player.preload = 'metadata'
  player.play()
  player.controls = true
  document.body.appendChild(player)
}