document.addEventListener("DOMContentLoaded", function(){

const menu = document.getElementById("menu-icon");
let toggled = false;
console.log(toggled)


menu.addEventListener("click", function() {
    console.log("menu clicked");

if(toggled == false){

    toggled = true;
    console.log(toggled)

    let lines = document.querySelectorAll(".menu-icon .line");

    lines.forEach((line, index) => {
        switch(index) {
            case 0:
                line.style.transform = "translate(0px, 200%) rotate(45deg)";
                break;
            case 1:
                line.style.backgroundColor = "rgba(0, 0, 0, 0)";
                break;
            case 2:
                line.style.transform = "translate(0px, -200%) rotate(-45deg)";
                break;
        }
    });


} else {
    toggled = false
    console.log(toggled)

    let lines = document.querySelectorAll(".menu-icon .line");

    lines.forEach((line, index) => {
        switch(index) {
            case 0:
                line.style.transform = "rotate(0deg) translate(0px, -50%)";
                break;
            case 1:
                line.style.backgroundColor = "var(--blue-color)";
                break;
            case 2:
                line.style.transform = "rotate(0deg) translate(0px, 50%)";
                break;
        }
    });
}
   
});

});