import ProjectCard from '../ProjectCard/ProjectCard';
import InkTankThumbnail from '../../assets/images/portfolio-project-t1.png';
import JargonThumbnail from '../../assets/images/portfolio-project-t2.png';
import './ProjectNav.scss';

const ProjectNav = ({ heading }) => {
    return (
        <section className='project-nav'>
            <h1 className='project-nav__heading'>{heading}</h1>
            <nav className='project-nav__nav'>
                <ProjectCard
                projectthumbnail={InkTankThumbnail}/>
                <ProjectCard
                projectthumbnail={JargonThumbnail}/>
                <ProjectCard
                projectthumbnail={InkTankThumbnail}/>
            </nav>
        </section>
    );
};

export default ProjectNav;