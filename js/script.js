// window.onscroll = function(ev) {
//     if (window.pageYOffset > 300) {
//         counter += 1;
//         showAboutMe();
//     } else if (window.pageYOffset < 300 ) {
//         hideAboutMe();
//     }
// }

// function showAboutMe() {
//     document.getElementsByClassName("about").item(0).style.display = "inherit";
// }

// function hideAboutMe() {
//     document.getElementsByClassName("about").item(0).style.display = "none";
// }

function showContainer() {
    document.getElementsByClassName("container").item(0).style.display = "flex";
    window.scrollTo({
        top: 600,
        behavior: "smooth",
    });
}

function hideContainer() {
    document.getElementsByClassName("container").item(0).style.display = "none";
}