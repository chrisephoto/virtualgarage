window.addEventListener("DOMContentLoaded", init);

function init() {
  var hash = window.location.hash.substr(1);
  dataScriptURL = "data/" + hash + ".js";
  
  var head = document.head;
  
  var dataScript = document.createElement('script');
  dataScript.src = dataScriptURL;
  head.appendChild(dataScript);
  
  var gameScript = document.createElement('script');
  gameScript.src = "game.js";
  head.appendChild(gameScript);
  
  document.title = window.title
  document.getElementById("page-title").innerHTML = window.title;
}
