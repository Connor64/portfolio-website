function show() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("shadow").classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle("active");

  let toggle = document.getElementById("toggle");
  toggle.classList.toggle("active");

  let bars = toggle.getElementsByTagName("span");

  for (bar of bars) {
    bar.classList.toggle("active");
  }
}