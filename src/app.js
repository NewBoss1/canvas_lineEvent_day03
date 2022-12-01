const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 1; //선 굵기

const colors = ["#348888", "#22BABB", "#9EF8EE", "#FA7F08", "#F24405"]; //색상

function onClick(event) {
  ctx.beginPath(); //새로운 레이어. 이코드가 없으면 이미 생성해놓은 선들의 색들도 함께 바뀐다.
  ctx.moveTo(0, 0); //시작점
  const color = colors[Math.floor(Math.random() * colors.length)]; //colors에서 랜덤한 색을 고른다.
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
