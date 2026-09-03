const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", function () {

    alert("ARCHIVE ACCESS GRANTED");
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