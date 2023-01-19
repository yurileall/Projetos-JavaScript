let count = 0;

document.getElementById("btnDiminuir").onclick = function() {
    count-=1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("btnResetar").onclick = function() {
    count=0;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("btnAumentar").onclick = function() {
    count+=1;
    document.getElementById("count").innerHTML = count;
}

