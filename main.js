$(document).ready(function () {
    $('.billed a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('a').removeClass('active');
        
    });
});