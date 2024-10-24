import navigation from "./modules/navigation.js"
import addFavoriteShoe from "./modules/addFavoriteShoe.js"
import themeController from "./modules/themeMode.js"

function initModules() {
    navigation()
    addFavoriteShoe()
    themeController()
}

document.addEventListener('DOMContentLoaded', initModules)