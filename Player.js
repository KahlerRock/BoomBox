
window.onload = function (){
  document.getElementById("loaded").innerHTML = "loaded";
}

function playMusic () {
    var player = new window.Audio('youtube.com/watch?v=s-mOy8VUEBk')
    player.preload = 'metadata'
    player.play()
    player.controls = true
    document.body.appendChild(player)
  }
  