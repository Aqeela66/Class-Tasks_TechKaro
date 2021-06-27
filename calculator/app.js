function addOp(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=a + b;
    document.getElementById("answer").value= c;
}
function subOp(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=a - b;
    document.getElementById("answer").value= c;
}
function mulOp(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=a * b;
    document.getElementById("answer").value= c;
}
function divOp(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=a / b;
    document.getElementById("answer").value= c;
}