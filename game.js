for (let i = 0; i < window.parts.length; i++) {
  target = document.querySelector("#options div");
  
  options = "";
  for (let j = 0; j < window.parts[i].options.length; j++) {
    options += "<li>" + window.parts[i].options[j].description + "</li>";
  }
    
  target.innerHTML += "<details><summary><h2>" + window.parts[i].title + "</h2><span>" + window.parts[i].option[0].description + "</span></summary><ul>" + options + "</ul></details>";
}
