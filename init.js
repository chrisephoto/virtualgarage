window.addEventListener("DOMContentLoaded", init);

function init() {
  //get url
  var hash = window.location.hash.substr(1);

  //load parts list json
  
  //update title
  document.title = hash;
  document.getElementById("page-title").innerHTML = hash;

  //load game.js
}
