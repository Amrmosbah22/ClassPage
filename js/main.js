// featured
$('#owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[ `<i class="fa-solid fa-angle-left"></i>` ,
    `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})
// testimonials
$('#owl-carousel2').owlCarousel({
    autoPlay:true,
    autoplaySpeed:1000,
    loop:true,
    margin:10,
    nav:true,
    navText:[ `<i class="fa-solid fa-angle-left"></i>` ,
    `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})