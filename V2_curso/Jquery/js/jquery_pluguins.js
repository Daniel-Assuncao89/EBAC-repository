$(document).ready( ()=>{
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click( ()=>{
        $('nav').slideToggle();
    } )
} )