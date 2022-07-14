function fibonacci() {
  var n = document.getElementById("number").value;
  var text = "";
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= n; i++) {
    text += n1 + " ";
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  document.getElementById("result").innerHTML = text;
}
function clr(){
    var colour = document.getElementById("colour").value;
    document.body.style.backgroundColor = colour;
}
function areaCircle()
{
    var radius = document.getElementById("radius").value;
    var area = Math.PI * radius * radius;
    document.getElementById("areaCircle").innerHTML = area;
}
function areaTriangle()
{
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var area = base * height / 2;
    document.getElementById("areaTriangle").innerHTML = area;
}
function areaRectangle()
{
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var area = length * width;
    document.getElementById("areaRectangle").innerHTML = area;
}
function areaSquare()
{
    var side = document.getElementById("side").value;
    var area = side * side;
    document.getElementById("areaSquare").innerHTML = area;
}