$('.item_news_display').click(function () {
    $('.nav-flag').removeClass('active')
    if ($('#item_news').hasClass('active')) {
        $('#item_news').removeClass('active')
    } else {
        $('#item_news').addClass('active')
    }
})
//
$('.navbar_invariable_display').click(function () {
    if ($('#navbar_expand_item').hasClass('show')) {
        $('.navbar').css({ height: '0%' })
        $('.zf_nav_menu').removeClass('active')
        $('#navbar_expand_item').removeClass('show')
    } else {
        $('.navbar').css({ height: '100%' })
        $('.zf_nav_menu').addClass('active')
        $('#navbar_expand_item').addClass('show')
    }
})
