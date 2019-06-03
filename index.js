document.addEventListener("DOMContentLoaded", () => {

    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.menu-holder');
    let currentPage = document.getElementById('current-page');
    let footerList = document.querySelector('.footer-menu-list');

    //load up footer content
    footerList.innerHTML = toggleFooterList("About Me");


    burger.addEventListener('click', () => {
        document.querySelector('.menu-holder').classList.toggle('active');
    })

    mobileMenu.addEventListener('click', (e) => {

        e.preventDefault();

        //get page name that was clicked
        let page = e.target.innerText;

        currentPage.innerText = page;

        footerList.innerHTML = toggleFooterList(page);

        document.querySelector('.menu-holder').classList.toggle('active');
    })


    function toggleFooterList(page) {
        if (page === 'About Me') {
            return `<li class="footer-menu-item">Bio</li>
                    <li class="footer-menu-item">Skills</li>
                    <li class="footer-menu-item">Hobbies</li>`
        }
        if (page === 'Resume') {
            return `<li class="footer-menu-item">Bio</li>
                    <li class="footer-menu-item">Projects</li>
                    <li class="footer-menu-item">Skills</li>
                    <li class="footer-menu-item">Experiences</li>`
        }
        if (page === 'Projects') {
            return `<li class="footer-menu-item">Squash Buddy</li>
                    <li class="footer-menu-item">Welcome Board</li>
                    <li class="footer-menu-item">Coach Me</li>`
        }
        if (page === 'Blog') {
            return `<li class="footer-menu-item">Latest</li>
                    <li class="footer-menu-item">First</li>`
        }
    }

})

