window.addEventListener("DOMContentLoaded", init);

function init() {
  var hash = window.location.hash.substr(1);
  dataScriptURL = "data/" + hash + ".js";
  loadScript(dataScriptURL, updatePage);
  loadScript("game.js");
}

function loadScript(url, callback)
{
  // Adding the script tag to the head as suggested before
  var head = document.head;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  if (callback) {
    script.onreadystatechange = callback;
    script.onload = callback;
  }

  // Fire the loading
  head.appendChild(script);
}

var updatePage = function() {
  document.title = "title"
  document.getElementById("page-title").innerHTML = title;
};
