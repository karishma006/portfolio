import './ProjectCard.scss';

const ProjectCard = ({ projectthumbnail, projectname }) => {
    return (
        <article className='project-card'>
            <img className='project-card__image' src={projectthumbnail} alt={projectname}/>
        </article>
    );
};

export default ProjectCard;