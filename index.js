window.addEventListener("scroll", function () {
    let navArea = document.getElementById("header-bottom");
    let logo = document.getElementById("nav-logo");

    if (window.pageYOffset > 0) {
        navArea.classList.add("is-sticky");
        logo.classList.add("to-small");
    } else {
        navArea.classList.remove("is-sticky");
        logo.classList.remove("to-small");
    }
});