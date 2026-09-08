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

    const message = document.createElement("div");

    message.innerText = "ACCESS DENIED.\n\nYOU ARE NOT SUPPOSED TO BE HERE.";

    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.background = "#000";
    message.style.border = "1px solid #777";
    message.style.padding = "30px";
    message.style.color = "#aaa";
    message.style.fontFamily = "Courier New";
    message.style.textAlign = "center";
    message.style.zIndex = "9999";

    document.body.appendChild(message);

    setTimeout(function() {
        message.remove();
    },2500);

}
function updateClock() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");

    const minutes = String(now.getMinutes()).padStart(2, "0");

    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("systemClock").textContent = hours + ":" + minutes + ":" + seconds;

}

setInterval(updateClock, 1000);

updateClock();