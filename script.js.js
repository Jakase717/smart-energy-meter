function changeBackground() {
  const colors = ["#f4f4f4", "#dff0d8", "#d9edf7", "#fcf8e3", "#f2dede"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}