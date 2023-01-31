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
  script.type = 'text/javascript';
  script.src = dataScriptURL;
  head.appendChild(script);
  
  //updatePage();
}
