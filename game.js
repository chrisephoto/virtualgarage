// listeners
window.addEventListener("DOMContentLoaded", init);

function init() {
  
  for (let j = 0; j < parts.length; j++) {
    document.getElementById("display").appendHTML = parts[j].title;
  }

/*
  const main = document.getElementById("main");
  const section = document.createElement("section");
  const sliderOuter = document.createElement("div");
  sliderOuter.className = "slider-outer";
  const sliderTitle = document.createElement("h2");
  sliderTitle.className = "slider-title text-size-l";
  const sliderMid = document.createElement("div");
  sliderMid.className = "slider-mid";
  sliderMid.id = "slider-" + opt1;
  const sliderInner = document.createElement("div");
  sliderInner.className = "slider-inner";
  const buttonLeft = document.createElement("a");
  buttonLeft.className = "nav-left";
  buttonLeft.setAttribute("onclick", "scrollSlider('slider-" + opt1 + "','l')");
  buttonLeft.innerHTML = "<svg width='24' height='24' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M10.25 6.75L4.75 12L10.25 17.25'></path><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.25 12H5'></path></svg>";
  const buttonRight = document.createElement("a");
  buttonRight.className = "nav-right visible";
  buttonRight.setAttribute("onclick", "scrollSlider('slider-" + opt1 + "','r')");
  buttonRight.innerHTML = "<svg width='24' height='24' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M13.75 6.75L19.25 12L13.75 17.25'></path><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 12H4.75'></path></svg>";

  main.appendChild(section);
  section.appendChild(sliderTitle);
  sliderTitle.appendChild(document.createTextNode(opt1.replace("-"," ")));
  section.appendChild(sliderOuter);
  sliderOuter.appendChild(sliderMid);
  sliderMid.appendChild(sliderInner);
  sliderMid.appendChild(sliderInner);
  sliderInner.appendChild(buttonLeft);

  for (let j = 0; j < data.length; j++) {

    if (Date.parse(data[j].date) >= Date.parse(Date()) || opt2 != "hide") {
      const anchor = document.createElement("a");
      anchor.className = "card";
      anchor.href = data[j].url;
      anchor.target = "_blank";
      if (Date.parse(data[j].date) < Date.parse(Date())) {
          anchor.classList.add("unavailable");
      }
      const img = document.createElement("img"); img.src = data[j].image;
      const textdiv = document.createElement("div");
      const series = document.createElement("p");
      const round = document.createElement("p");
      const date = document.createElement("p");
      const track = document.createElement("p");
      const seriestext = document.createTextNode(data[j].series);
      const roundtext = document.createTextNode(data[j].round);
      const datetext = document.createTextNode(data[j].date);
      const tracktext = document.createTextNode(data[j].track);
      sliderInner.appendChild(anchor);
      anchor.appendChild(img);
      textdiv.appendChild(series);
      series.className = "text-size-s";
      series.appendChild(seriestext);
      anchor.appendChild(textdiv);
      textdiv.appendChild(round);
      round.className = "text-size-s";
      round.appendChild(roundtext);
      textdiv.appendChild(track);
      track.className = "text-size-s";
      track.appendChild(tracktext);
      textdiv.appendChild(date);
      date.className = "text-size-s";
      date.appendChild(datetext);
      }
    }
    sliderInner.appendChild(buttonRight);
  }
  */
                            
}
