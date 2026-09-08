const enterButton = document.getElementById("enterButton");
const ambientSound = document.getElementById("ambientSound");

enterButton.addEventListener("click", function () {

    ambientSound.volume = 0.8;


    ambientSound.play();

    document.querySelector(".screen").style.display = "none";

    document.getElementById("archive").style.display = "block";

});

const title = document.getElementById("title");

setInterval(function() {

    if(Math.random() < 0.25) {

        title.style.transform = 
                        "translateX(" + (Math.random() * 6 - 3) + "px)";

                        title.style.opacity = "0.6";

                        setTimeout(function () {

                            title.style.transform = "translateX(0)";
                            title.style.opacity = "1";
                        }, 100);
    }
},3000);


function openSection(sectionName) {

    document.querySelector(".archive-menu").style.display = "none";

    document.querySelectorAll(".archive-section").forEach(function(section) {

        section.style.display = "none";
    });

     document.getElementById(sectionName).style.display = "block";

}

function closeSection() {

    document.querySelectorAll(".archive-section").forEach(function(section){

        section.style.display = "none";
    });

    document.querySelector(".archive-menu").style.display = "flex";
}
function lockedMessage() {

    alert("ACCESS DENIED.");
}