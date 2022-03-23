import HeroImage from '../../components/Hero/Hero';
import Subheader from '../../components/Subheader/Subheader';
import Projects from '../../components/Projects/Projects';

const Home = () => {
    return (
        <>
            <HeroImage/>
            <Subheader
            text='Projects'/>
            <Projects/>
        </>
    );
};

export default Home;