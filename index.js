document.addEventListener("DOMContentLoaded", () => {

    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.menu-holder');
    let currentPage = document.getElementById('current-page');
    let footerList = document.querySelector('.footer-menu-list');
    let mainBody = document.querySelector('.main-body');

    //load up footer content
    currentPage.innerText = "Resume"
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
            return `<li class="footer-menu-item"><a href="#projects">Projects</a></li>
                    <li class="footer-menu-item"><a href="#skills">Skills</a></li>
                    <li class="footer-menu-item"><a href="#jobs">Jobs</a></li>
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
                    
                        <p> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quis enim similique sapiente
                            reprehenderit recusandae eveniet illum unde cum blanditiis assumenda fugiat laudantium dicta animi
                            distinctio! Excepturi cum recusandae <a id="hobbies">culpa</a>!
                        </p>
                    
                    <br />
                    
                        <h3>Hobbies</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quis enim similique sapiente
                            reprehenderit recusandae eveniet illum unde cum blanditiis assumenda fugiat laudantium dicta animi
                            distinctio! Excepturi cum recusandae culpa!
                        </p>
                    `

        } if (page === "Resume") {
            return `<a id="projects">
                        
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


                    <h3>
                        Technical Skills
                    </h3>

                    <div class="tech-skills-holder">
                        <p>
                            <span>Ruby, Rails, SQL, JavaScript, React, Redux, Java, HTML, CSS, Postgresql, Material UI, Semantic UI, Github, <a id="jobs">Terminal</a></span>
                        </p>
                    </div>

                    <br/>

                    <h3>
                        Employment History
                    </h3>

                    <div class="job-holder">
                        <ul>
                            <li><span>NYSC (Cobble Hill)</span>
                                <ul>
                                
                                </ul>
                            </li>
                            <li><span>SteelCitySquash</span>
                                <ul>
                                
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <h3>
                        Eduction
                    </h3>

                    <div class="education-holder">
                        <ul>
                            <li><span>Flatiron School</span>
                                <ul>
                                
                                </ul>
                            </li>
                            <li><span>Hobart and William Smith Colleges</span>
                                <ul>
                                
                                </ul>
                            </li>
                        </ul>
                    </div>
                    `
        } else { return `<h1>${page}</h1>` }
    }
})

