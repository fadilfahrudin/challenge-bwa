const addFavoriteShoe = () => {
    $('.like-act').on('click', function () {
        $(this).find('.like').toggleClass('hidden')
        $(this).find('.like-active').toggleClass('hidden')
    })
}

export default addFavoriteShoe