document.addEventListener("DOMContentLoaded", () => {

    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.menu-holder');
    let currentPage = document.getElementById('current-page');
    let footerList = document.querySelector('.footer-menu-list');
    let mainBody = document.querySelector('.main-body');

    //load up footer content
    footerList.innerHTML = toggleFooterList("Resume");
    mainBody.innerHTML = togglePage('Resume')

    burger.addEventListener('click', () => {
        document.querySelector('.menu-holder').classList.toggle('active');
    })

    mobileMenu.addEventListener('click', (e) => {

        e.preventDefault();

        //get page name that was clicked
        let page = e.target.innerText;

        currentPage.innerText = page;

        footerList.innerHTML = toggleFooterList(page);

        mainBody.innerHTML = togglePage(page);

        document.querySelector('.menu-holder').classList.toggle('active');
    })


    function toggleFooterList(page) {
        if (page === 'About Me') {
            return `<li class="footer-menu-item"><a href="#bio">Bio</a></li>
                    <li class="footer-menu-item"><a href="#skills">Skills</a></li>
                    <li class="footer-menu-item"><a href="#hobbies">Hobbies</a></li>`
        }
        if (page === 'Resume') {
            return `<li class="footer-menu-item">Projects</li>
                    <li class="footer-menu-item">Skills</li>
                    <li class="footer-menu-item">Jobs</li>
                    <li class="footer-menu-item">Education</li>`
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

    function togglePage(page) {
        if (page === "About Me") {
            return `<a id="bio">
                        <h1>
                            Terrance Rose Jr.
                        </h1>
                    </a>

                    <img class="about-me my-photo" alt="" src="./pics/personal_site_photo.jpeg">

                    <h3>My Passion</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quis enim similique sapiente
                        reprehenderit recusandae eveniet illum unde cum blanditiis assumenda fugiat laudantium dicta animi
                        distinctio! Excepturi cum recusandae culpa! Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum, quis enim similique sapiente
                        reprehenderit recusandae eveniet illum unde cum blanditiis assumenda fugiat laudantium dicta animi
                        distinctio! Excepturi cum recusandae <a id="skills"><span>culpa</span></a>!
                    </p>

                    <br />
                   
                    
                        <h3>Skills</h3>
                    
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quis enim similique sapiente
                            reprehenderit recusandae eveniet illum unde cum blanditiis assumenda fugiat laudantium dicta animi
                            distinctio! Excepturi cum recusandae culpa!
                        </p>
                    
                    <br />
                    <a id="hobbies">
                        <h3>Hobbies</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quis enim similique sapiente
                            reprehenderit recusandae eveniet illum unde cum blanditiis assumenda fugiat laudantium dicta animi
                            distinctio! Excepturi cum recusandae culpa!
                        </p>
                    </a>`

        } if (page === "Resume") {
            return `<a id="bio">
                        <h1>
                            Resume
                        </h1>
                    </a>

                    <h3>
                        Projects
                    </h3>

                    <div class="project-holder">
                        <ul>
                            <li><span>Coach Me</span>
                                <ul>
                                
                                </ul>
                            </li>
                            <li><span>Welcome Board</span>
                                <ul>
                                
                                </ul>
                            </li>
                            <li><span>Squash Buddy</span>
                                <ul>
                                
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    `
        } else { return `<h1>${page}</h1>` }
    }
})

