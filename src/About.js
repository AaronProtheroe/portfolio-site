import './About.css'

function About() {
    return (
        <div className='about_container'>
            <div className='about'>
                <h4>About me</h4>
                <br></br>
                <p>
                    My name is Aaron Protheroe, I am an aspiring software developer from Cape Town.
                    I have been programming for a little over a year and a half now. Coding had
                    always been something that had interested me. <br></br><br></br>I started programming by learning
                    some basic Python and Java from YouTube websites etc. I found it all very interesting and seemed to have a knack
                    for it. I decided to enroll myself into a software engineering bootcamp with HyperionDev. Through out this course I was
                    able to learn some of the fundamental skills of software engineering. Since then
                    I have also done some web development short courses with Zaio.<br></br><br></br>As someone who
                    is very  eager to begin a career in the software development field, I feelthat SovTech would 
                    be the perfect place to begin my career as a developer while allowing me to constantlygrow my
                    skill set and learn new things. 
                </p>
            </div>

            <div className='skills'>
                <h2>Skills</h2>
                <div className='skills_section'>
                    <div className='skill'>
                        <h5>HTML</h5>
                    </div>
                    <div className='skill'>
                        <h5>CSS</h5>
                    </div>
                    <div className='skill'>
                        <h5>JavaScript</h5>
                    </div>
                    <div className='skill'>
                        <h5>Java</h5>
                    </div>
                    <div className='skill'>
                        <h5>Python</h5>
                    </div>
                    <div className='skill'>
                        <h5>MySQL</h5>
                    </div>
                    <div className='skill'>
                        <h5>GIT</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;