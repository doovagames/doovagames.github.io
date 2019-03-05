function carousel(className, ...images) {
    const imagePlaceholder = document.getElementsByClassName(className)[0];
    for (let i = 0; i < images.length; i++)
    {
        imagePlaceholder.src = images[i];
        console.log(images[i]);
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

setInterval(carousel("visual", "images/visual0.png", "images/visual1.png", "images/visual2.png", "images/visual3.png", "images/visual4.png", "images/visual5.png", "images/visual6.png"), 3000);
carousel("mechanics", "images/mechanics0.png", "images/mechanics1.png", "images/mechanics2.png", "images/mechanics3.png");
carousel("sound", "images/sound0.png", "images/sound1.png", "images/sound2.png", "images/sound3.png");

