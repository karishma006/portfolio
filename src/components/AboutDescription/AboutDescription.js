import './AboutDescription.scss';

const AboutDescription = ({ subheading, body }) => {
    return (
        <article className='about__description'>
            <h2 className='about__subheading'>{subheading}</h2>
            <p className='about__body'>{body}</p>
        </article>
    );
};

export default AboutDescription;