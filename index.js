//do this when document is loaded
document.addEventListener("DOMContentLoaded", () => {

    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.menu-holder');

    burger.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === "none" ? 'block' : "none"
    })


    //setting up menu display
    mobileMenu.style.display = "none";
    mobileMenu.addEventListener('click', () => {
        console.log('clicked inside menu')
    })

})

