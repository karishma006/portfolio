import TeamImage from '../../assets/images/portfolio-about-team.jpg';
import './About.scss';

const About = () => {
    return (
        <section className='about'>
            <h1 className='about__heading'>Our Team</h1>
            <article className='about__container'>
                <img className='about__image' src={TeamImage} alt='Team'/>
                <div className='about__description'>
                    <h2 className='about__subheading'>Party Of Three!</h2>
                    <p className='about__body'>An architect turned UX Designer and Developer; my bricks-to-clicks transformation is not an unfamiliar one. My background in architecture (10 long but amazing years) has given me me a strong foundation in designing spatial environments which I now apply in creating digital experiences. My goal is to design and build products which aim to make this a more beautiful, kind, and productive world and I understand how these products work - inside and out.</p>
                </div>
            </article>
        </section>
    );
};

export default About;