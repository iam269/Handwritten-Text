function drawName() {
  let canvas = document.getElementById("nameCanvas");
  let ctx = canvas.getContext("2d");
  let name = document.getElementById("nameInput").value;
  let font = document.getElementById("fontSelector").value;
  document.fonts.ready.then(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `50px ${font}`;
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 15);
  });
}
document.getElementById("fontSelector").addEventListener("change", () => {
  document.fonts
    .load(`50px ${document.getElementById("fontSelector").value}`)
    .then(drawName);
});

document.getElementById("nameInput").addEventListener("input", () => {
  document.fonts
    .load(`50px ${document.getElementById("fontSelector").value}`)
    .then(drawName);
});
function downloadImage() {
  let canvas = document.getElementById("nameCanvas");
  let link = document.createElement("a");
  link.download = "handwritten-name.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
