import HeroImage from '../../assets/images/portfolio-hero.jpg';
import './Hero.scss';

const Hero = () => {
    return (
        <section className='hero'>
            <img className='hero__image' src={HeroImage} alt='Hero'/>
        </section>
    );
};

export default Hero;