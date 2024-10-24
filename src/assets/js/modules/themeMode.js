const themeController = (() => {
    $('#toggleTheme').click(() => {
        $('html').toggleClass('dark')
        $('#toggle-bg').toggleClass('bg-dark')
        if ($('#toggle-bg').hasClass('translate-x-4')) {
            $('#toggle-bg').removeClass('translate-x-4')
            $('#toggle-bg').addClass('-translate-x-4')
        } else{
            $('#toggle-bg').removeClass('-translate-x-4')
            $('#toggle-bg').addClass('translate-x-4')
        }
    })
})

export default themeController