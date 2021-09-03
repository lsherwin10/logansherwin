function amountScrolled() {
    var scrollTop = $(window).scrollTop();

    var navElements = document.getElementsByClassName("topnav");
    if (navElements.length != undefined) {
        if (scrollTop > 20) {
            for (i = 0; i < navElements.length; i++) {
                navElements[i].classList.add("scrolled");
            }
        }
        else {
            for (i = 0; i < navElements.length; i++) {
                navElements[i].classList.remove("scrolled");
            }
        }
    }
}

$(window).on("scroll", function () {
    amountScrolled();
})