let slideGenIndex = 1,
    slideJPIndex = 1,
    slideCalcIndex = 1,
    slideTextIndex = 1,
    slidePortfolioIndex = 1;

// Next/previous controls
function plusSlides(n, slideSet) {
    switch (slideSet) {
        case `gen`:
            showSlides(slideGenIndex += n, slideSet);
            break;
        case `jp`:
            showSlides(slideJPIndex += n, slideSet);
            break;
        case `calc`:
            showSlides(slideCalcIndex += n, slideSet);
            break;
        case `text`:
            showSlides(slideTextIndex += n, slideSet);
            break;
        case `portfolio`:
            showSlides(slidePortfolioIndex += n, slideSet);
            break;
    }
}

// Thumbnail image controls
function currentSlide(n, slideSet) {
    switch (slideSet) {
        case `gen`:
            showSlides(slideGenIndex = n, slideSet);
            break;
        case `jp`:
            showSlides(slideJPIndex = n, slideSet);
            break;
        case `calc`:
            showSlides(slideCalcIndex = n, slideSet);
            break;
        case `text`:
            showSlides(slideTextIndex = n, slideSet);
            break;
        case `portfolio`:
            showSlides(slidePortfolioIndex = n, slideSet);
            break;
    }
}

function showSlides(n, slideSet) {
    let i;
    let slides;
    let dots;
    switch (slideSet) {
        case `gen`:
            slides = document.getElementsByClassName("gen-slides");
            dots = document.getElementsByClassName("gen-dot");
            if (n > slides.length) { slideGenIndex = 1 }
            if (n < 1) { slideGenIndex = slides.length }
            break;
        case `jp`:
            slides = document.getElementsByClassName("jp-slides");
            dots = document.getElementsByClassName("jp-dot");
            if (n > slides.length) { slideJPIndex = 1 }
            if (n < 1) { slideJPIndex = slides.length }
            break;
        case `calc`:
            slides = document.getElementsByClassName("calc-slides");
            dots = document.getElementsByClassName("calc-dot");
            if (n > slides.length) { slideCalcIndex = 1 }
            if (n < 1) { slideCalcIndex = slides.length }
            break;
        case `text`:
            slides = document.getElementsByClassName("text-slides");
            dots = document.getElementsByClassName("text-dot");
            if (n > slides.length) { slideTextIndex = 1 }
            if (n < 1) { slideTextIndex = slides.length }
            break;
        case `portfolio`:
            slides = document.getElementsByClassName("portfolio-slides");
            dots = document.getElementsByClassName("portfolio-dot");
            if (n > slides.length) { slidePortfolioIndex = 1 }
            if (n < 1) { slidePortfolioIndex = slides.length }
            break;
    }

    //   let slides = document.getElementsByClassName(slideSet + "-slides");
    //   let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    switch (slideSet) {
        case `gen`:
            slides[slideGenIndex - 1].style.display = "block";
            dots[slideGenIndex - 1].className += " active";
            break;
        case `jp`:
            slides[slideJPIndex - 1].style.display = "block";
            dots[slideJPIndex - 1].className += " active";
            break;
        case `calc`:
            slides[slideCalcIndex - 1].style.display = "block";
            dots[slideCalcIndex - 1].className += " active";
            break;
        case `text`:
            slides[slideTextIndex - 1].style.display = "block";
            dots[slideTextIndex - 1].className += " active";
            break;
        case `portfolio`:
            slides[slidePortfolioIndex - 1].style.display = "block";
            dots[slidePortfolioIndex - 1].className += " active";
            break;
    }
    //   slides[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
}
// let slideGenIndex = 1,
// slideJPIndex = 1,
// slideCalcIndex = 1,
// slideTextIndex = 1,
// slidePortfolioIndex = 1;
showSlides(slideGenIndex, `gen`);
showSlides(slideJPIndex, `jp`);
showSlides(slideCalcIndex, `calc`);
showSlides(slideTextIndex, `text`);
showSlides(slidePortfolioIndex, `portfolio`);
