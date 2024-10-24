const themeController = (() => {
    $('#toggleTheme').click(() => {
        $('html').toggleClass('dark')
        $('#toggle-bg').toggleClass('-translate-x-4 bg-dark')
    })
})

export default themeController