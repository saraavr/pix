document.getElementById('movingButton').addEventListener('click', moveButton);

function moveButton() {
  var button = document.getElementById('movingButton');
  var newX = Math.random() * window.innerWidth;
  var newY = Math.random() * window.innerHeight;
  button.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
}

function gif() {
  var g =document.getElementById("gif1");
  g.src="https://gifman.net/wp-content/uploads/2019/06/ursinho-fofo-apaixonado.gif";
  g.innerHTML="Detalhes no wpp ;)";
}

function canvas(){
  var dd1= document.getElementById("canvas");
  dd1.style.backgroundColor="white";
  var ctx = dd1.getContext("2d");
  ctx.fillStyle= "green";
  ctx.font = "20px Courier new";
  ctx.fillText(" chave 71981778185😄",10,50);
}

function clearNo() {
  var no= document.getElementById("movingButton");
  no.innerHTML = ""
  no.className = "no"
}

function sim(){
gif();
  canvas();
  clearNo();
}
