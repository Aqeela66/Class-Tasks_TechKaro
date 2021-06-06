
function cssDom() {
    let element;
    element = document.querySelector(".header").style.border;
    element1 = document.querySelector(".header").style.border = "5px solid blue";
    element2 = document.querySelector(".header").style.backgroundColor;
    element3 = document.querySelector(".header").style.backgroundColor = "skyBlue";
    element4= document.querySelector(".header").className;
    element5= document.querySelector(".header").className="firstHeading";
    element6= document.querySelector(".header").classList;
    element7= document.querySelector(".header").classList="header3";
    console.log(element);
    console.log(element1);
    console.log(element2);
    console.log(element3);
    console.log(element4);
    console.log(element5);
    console.log(element6);
    console.log(element7);
    
}
