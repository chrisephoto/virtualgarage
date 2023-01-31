for (let i = 0; i < window.parts.length; i++) {
  target = document.querySelector("#options div")
  target.innerHTML += "
  <details>
    <summary>
      <h2>Headlights</h2>
      <span>Stock</span>
    </summary>
    <ul>
      <li>Stock</li>
      <li>Civic Type R</li>
    </ul>
  </details>"
  
  console.log(window.parts[i].title);
}
