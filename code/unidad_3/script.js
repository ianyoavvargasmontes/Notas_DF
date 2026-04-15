const cube = document.getElementById("cube");

let rotateX = 0;
let rotateY = 0;

// 🔍 ESCALA
let scale = 1;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      rotateX -= 90;
      break;
    case "ArrowDown":
      rotateX += 90;
      break;
    case "ArrowLeft":
      rotateY -= 90;
      break;
    case "ArrowRight":
      rotateY += 90;
      break;

    // 🔍 CONTROL DE ESCALA
    case "a":
    case "A":
      scale += 0.1;
      break;
    case "d":
    case "D":
      scale -= 0.1;
      break;
  }

  // Limitar escala
  scale = Math.max(0.5, Math.min(3, scale));

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
});