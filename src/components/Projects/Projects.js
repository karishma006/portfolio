import ProjectNav from '../ProjectNav/ProjectNav';

import './Projects.scss';

const Projects = () => {
    return (
        <section className='projects'>
            <ProjectNav
            heading='Design'/>
            <ProjectNav
            heading='Development'/>
            <ProjectNav
            heading='Design and Development'/>
        </section>
    );
};

export default Projects;