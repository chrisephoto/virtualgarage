window.addEventListener("DOMContentLoaded", init);

function init() {
  //get url
  var hash = window.location.hash.substr(1);

  //load parts list json
  var script = document.createElement("script");
  var src = "data/" + hash + ".js";
  script.setAttribute("src", src);
  script.setAttribute("type", "text/javascript");
  document.getElementsByTagName('head')[0].appendChild(script);
  console.log(title);
  
  //update title
  document.title = hash;
  document.getElementById("page-title").innerHTML = hash;

  //load game.js
}
