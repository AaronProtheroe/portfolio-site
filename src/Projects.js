import './Projects.css'

function Projects() {

    const projects = [
    {title: 'Tesla clone', src:'https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/Tesla.png', href: 'https://aaron-teslaclone.netlify.app/'},
    {title: 'Netflix clone',src: 'https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/html_netflix.png', href: 'https://aaron-netflixclone.netlify.app/'},
    {title: 'YouTube clone', src: 'https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/html_youtube.png', href: 'https://youtubecloneaaron.netlify.app/'},
    {title: 'Twitter clone', src: 'https://res.cloudinary.com/ak-124210/image/upload/v1642434078/yjnzwmihmhghxkwnb6n9.png', href:'https://aaron-twitterclone.netlify.app/'},
    {title: 'Google keep clone', src: 'https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/gk_js.png', href: 'https://googlekeepcloneaaron.netlify.app/'}
    ]

    return (

        <div className='projects_section'>
            <div><h1>Projects</h1></div>
            <h5>These are some of the landing pages/clones that I have built as part of the web development courses I have done. My full portfolio can be viewed on Github.</h5>
            <div className='projects_container'>
                {projects.map((project =>
                <a href={project.href}>
                  <div className='project'>
                    <h5>{project.title}</h5>
                    <img src={project.src} alt=''/>
                  </div>  
                </a> 
                )) } 
            </div>
        </div>
        
    )
}

export default Projects;