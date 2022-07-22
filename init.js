window.addEventListener("DOMContentLoaded", init);

function init() {
  //get url
  var hash = window.location.hash.substr(1);

  //load parts list json
  var dataScript = document.createElement("script");
  var src = "data/" + hash + ".js";
  dataScript.setAttribute("src", src);
  dataScript.setAttribute("type", "text/javascript");
  document.getElementsByTagName('head')[0].appendChild(dataScript);

  //load game.js
  var gameScript = document.createElement("script");
  gameScript.setAttribute("src", "game.js");
  gameScript.setAttribute("type", "text/javascript");
  document.getElementsByTagName('head')[0].appendChild(gameScript);
}
