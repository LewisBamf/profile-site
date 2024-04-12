document.addEventListener("DOMContentLoaded", function(){

const menu = document.getElementById("menu-icon");
let toggled = false;
console.log(toggled)


menu.addEventListener("click", function() {
    console.log("menu clicked");

if(toggled == false){
//when opening do this
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
    //when closing do this
    toggled = false
    console.log(toggled)

    let lines = document.querySelectorAll(".menu-icon .line");

    lines.forEach((line, index) => {
        switch(index) {
            case 0:
                line.style.transform = "translate(0px, -25%) rotate(0deg)";
                break;
            case 1:
                line.style.backgroundColor = "var(--blue-color)";
                break;
            case 2:
                line.style.transform = "translate(0px, 25%) rotate(0deg)";
                break;
        }
    });
}
   
});

});