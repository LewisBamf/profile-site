const menu = document.querySelector(".menu-icon")

menu.addEventListener("click", function() {
    let lines = document.querySelectorAll(".line")

    lines.forEach((line, index) => {

        switch(index){

            case 0:
                line.style.transform = "rotate(135deg)"
            break;

            case 1:
                line.style.display = "none"
            break;

            case 2:
                line.style.transform = "rotate(-45deg)"
            break;
        };






    })
});