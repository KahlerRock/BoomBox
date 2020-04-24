
window.onload = function (){
  document.getElementById("player").innerHTML = "Player.js: loaded";
}

function playMusic () {
  console.log("playMusic");
  var player = new window.Audio('https://www.youtube.com/watch?v=30PvYhVKNGgs')
  player.preload = 'metadata'
  player.play()
  player.controls = true
  document.body.appendChild(player)
}

function search(){
  var s = document.getElementById("searchBar").value;
  var para = document.createElement("P");
  para.innerHTML = s;
  document.getElementById("songList").appendChild(para);
}