import './AboutImageRound.scss';

const AboutImageRound = ({ src, alt }) => {
    return (
        <img className='about__image--round' src={src} alt={alt}/>
    );
};

export default AboutImageRound;