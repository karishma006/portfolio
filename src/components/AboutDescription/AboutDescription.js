import './AboutDescription.scss';

const AboutDescription = ({ classname, subheading, body }) => {
    return (
        <article className={classname}>
            <h2 className='about__subheading'>{subheading}</h2>
            <p className='about__body'>{body}</p>
        </article>
    );
};

export default AboutDescription;