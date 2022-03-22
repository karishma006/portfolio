import HeroImage from '../../assets/images/portfolio-hero.jpg';
import './Hero.scss';

const Hero = () => {
    return (
        <hero className='hero'>
            <img className='hero__image' src={HeroImage} alt='Hero'/>
        </hero>
    );
};

export default Hero;