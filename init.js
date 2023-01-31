window.addEventListener("DOMContentLoaded", init);

function init() {
  var head = document.head;
  
  // define parameters for data script
  var hash = window.location.hash.substr(1);
  dataScriptURL = "data/" + hash + ".js";
  var dataScript = document.createElement('script');
  dataScript.src = dataScriptURL;
  head.appendChild(dataScript);
  
  // define parameters for game script
  var gameScript = document.createElement('script');
  gameScript.src = "game.js";
  head.appendChild(gameScript);
  
  setTimeout(updateTitle, 50)
}

function updateTitle() {
  // update window and page title
  document.title = window.title
  document.getElementById("page-title").innerHTML = window.title;
}
