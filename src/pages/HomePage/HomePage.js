import HeroImage from '../../components/Hero/Hero';
import Subheader from '../../components/Subheader/Subheader';
import Projects from '../../components/Projects/Projects';
import About from '../../components/About/About';

const HomePage = () => {
    return (
        <>
            <HeroImage/>
            <Subheader
            text='Projects'/>
            <Projects/>
            <Subheader
            text='About'/>
            <About/>
        </>
    );
};

export default HomePage;