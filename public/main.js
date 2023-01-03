(function () {
    $(window).scroll(function () {
        var oVal = $(window).scrollTop() / 30;
        // $(".blur").css("filter", `blur(${oVal}px) `);
        // $(".bannerLogo>img").css("transform", `scale(${oVal / 4 <= 1 ? 1 : oVal / 4})`);
        // $("nav.nav").css("top", `${oVal}px `);
    });
}).call(this);

const counter = () => {

    var count = setInterval(() => {
        let c = parseInt(document.getElementById("preloaderCounter").innerHTML);
        var countr = document.getElementById("preloaderCounter");
        var loadr = document.getElementById("preloader");
        c++;
        countr.innerHTML = c.toString();
        document.getElementById("prgrs").style.width = `${c}%`;
        $(document).ready(function () {
            loadr.classList.add('active');
        })
        if (c === 100) {
            clearInterval(count);
            countr.classList.add('hideLoader');

        }
    }, 60);
}
counter();
$(document).ready(function () {
    //MixitUp Gallery Filters
    if ($(".filter-list").length) {
        $(".filter-list").mixItUp({});
    }

    window.addEventListener('click', () => {
        if (window.location.href.indexOf("portfolio") > -1) {
            if ($(".filter-list").length) {
                $(".filter-list").mixItUp({});
            }
        }
    })

    if ($(".side-menu__block").length) {
        $(".mobile-nav__container").find("li.dropdown a").on("click", function (e) {
            // e.preventDefault();
            $(this).toggleClass("open");
            $(this).parent("li").children("ul").slideToggle(500);
        });
    }
    if ($(".masonary-layout").length) {
        setTimeout(() => {
            $(".masonary-layout").isotope({
                layoutMode: "masonry",
                itemSelector: ".masonary-item"
            });
        }, 500);
    }

});