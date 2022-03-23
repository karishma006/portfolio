import AboutDescription from '../AboutDescription/AboutDescription';
import AboutImageRound from '../AboutImageRound/AboutImageRound';
import TeamImage from '../../assets/images/portfolio-about-team.jpg';
import './About.scss';

const About = () => {
    return (
        <section className='about'>
            <article className='about__container'>
                <AboutImageRound
                src={TeamImage}
                alt='Our Team'/>
                <AboutDescription
                subheading='Party Of Three!'
                body='An architect turned UX Designer and Developer; my bricks-to-clicks transformation is not an unfamiliar one. My background in architecture (10 long but amazing years) has given me me a strong foundation in designing spatial environments which I now apply in creating digital experiences. My goal is to design and build products which aim to make this a more beautiful, kind, and productive world and I understand how these products work - inside and out.'/>
            </article>
        </section>
    );
};

export default About;