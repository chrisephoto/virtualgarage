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
  
  updateTitle();
  updateOptions();
  
  //setTimeout(updateTitle, 500)
  //setTimeout(updateOptions, 1000);
  //setTimeout(loadingComplete, 3000);
}

function updateTitle() {
  // update window and page title
  if (window.title  === undefined) {
   updateTitle();
  }
  else {
    document.title = window.title
    document.getElementById("page-title").innerHTML = window.title;
  }
}

function updateOptions() {
  // populate options
  if (window.parts  === undefined) {
    updateOptions()
  }
  else {
    for (let i = 0; i < window.parts.length; i++) {
      target = document.querySelector("#options div");

      options = "";
      for (let j = 0; j < window.parts[i].options.length; j++) {
        options += "<li>" + window.parts[i].options[j].description + "</li>";
      }

      target.innerHTML += "<details><summary><h2>" + window.parts[i].title + "</h2><span>" + window.parts[i].options[0].description + "</span></summary><ul>" + options + "</ul></details>";
    }
  }
}
/*
function loadingComplete() {
  document.getElementById("loading").style.display="none";
}
*/
