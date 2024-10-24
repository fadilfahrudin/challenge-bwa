const navigation = () => {
    const currentPath = window.location.pathname;
    const links = $('.nav-link a');
    const navigationActive = 'absolute lg:px-5 xl:px-10 left-0 h-[47px] top-[-10px] w-full flex items-center bg-gradient-to-r from-[#D4DBFF] to-[#F3F5FF] text-primary font-medium'.split(' ');
    const navigationNotActive = 'text-[#66696F] font-normal'.split(' ');
    links.each((i, el) => {
        if (el.getAttribute('href') === currentPath) {
            el.classList.add(...navigationActive);
            el.parentNode.classList.add('after:absolute', 'after:top-[-10px]', 'after:left-0', 'after:h-[47px]', 'after:w-[6px]', 'after:bg-primary', 'after:rounded-e-lg');
        } else {
            el.classList.add(...navigationNotActive);
        }
    });
}

export default navigation