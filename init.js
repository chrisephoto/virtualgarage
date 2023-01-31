window.addEventListener("DOMContentLoaded", init);

/*
function updatePage() {
  document.title = title
  document.getElementById("page-title").innerHTML = title;
}
*/

function init() {
  var hash = window.location.hash.substr(1);
  dataScriptURL = "data/" + hash + ".js";
  
  var head = document.head;
  var script = document.createElement('script');
  script.src = dataScriptURL;
  head.appendChild(script);
  
  script.src = "game.js";
  head.appendChild(script);
  
  //updatePage();
}
