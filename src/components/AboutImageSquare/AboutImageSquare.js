import './AboutImageSquare.scss';

const AboutImageSquare = ({ src, alt }) => {
    return (
        <img className='about__image--square' src={src} alt={alt}/>
    );
};

export default AboutImageSquare;