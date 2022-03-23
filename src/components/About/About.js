import AboutDescription from '../AboutDescription/AboutDescription';
import AboutImageRound from '../AboutImageRound/AboutImageRound';
import AboutImageSquare from '../AboutImageSquare/AboutImageSquare';
import TeamImage from '../../assets/images/portfolio-about-team.jpg';
import YashImage from '../../assets/images/portfolio-about-yash.jpg';
import KarishmaImage from '../../assets/images/portfolio-about-karishma.jpg';
import OzzyImage from '../../assets/images/portfolio-about-ozzy.jpg';
import './About.scss';

const About = () => {
    return (
        <section className='about'>
            <article className='about__card'>
                <h1 className='about__heading'>Our Team</h1>
                <div className='about__container'>
                    <AboutImageRound
                    src={TeamImage}
                    alt='Our Team'/>
                    <AboutDescription
                    classname='about__description--right'
                    subheading='Party Of Three!'
                    body='An architect turned UX Designer and Developer; my bricks-to-clicks transformation is not an unfamiliar one. My background in architecture (10 long but amazing years) has given me me a strong foundation in designing spatial environments which I now apply in creating digital experiences. My goal is to design and build products which aim to make this a more beautiful, kind, and productive world and I understand how these products work - inside and out.'/>
                </div>
            </article>
            <article className='about__card'>
                <h1 className='about__heading'>Yash</h1>
                <div className='about__container'>
                    <AboutDescription
                    classname='about__description--left'
                    subheading='Project Manager and Programmer'
                    body='An architect turned UX Designer and Developer; my bricks-to-clicks transformation is not an unfamiliar one. My background in architecture (10 long but amazing years) has given me me a strong foundation in designing spatial environments which I now apply in creating digital experiences. My goal is to design and build products which aim to make this a more beautiful, kind, and productive world and I understand how these products work - inside and out.'/>
                    <AboutImageSquare
                    src={YashImage}
                    alt='Yash'/>
                </div>
            </article>
            <article className='about__card'>
                <h1 className='about__heading'>Karishma</h1>
                <div className='about__container'>
                    <AboutImageSquare
                    src={KarishmaImage}
                    alt='Karishma'/>
                    <AboutDescription
                    classname='about__description--right'
                    subheading='Researcher, Designer and Developer'
                    body='An architect turned UX Designer and Developer; my bricks-to-clicks transformation is not an unfamiliar one. My background in architecture (10 long but amazing years) has given me me a strong foundation in designing spatial environments which I now apply in creating digital experiences. My goal is to design and build products which aim to make this a more beautiful, kind, and productive world and I understand how these products work - inside and out.'/>
                </div>
            </article>
            <article className='about__card'>
                <h1 className='about__heading'>Ozzy</h1>
                <div className='about__container'>
                    <AboutDescription
                    classname='about__description--left'
                    subheading='Entertainer and Stess buster'
                    body='An architect turned UX Designer and Developer; my bricks-to-clicks transformation is not an unfamiliar one. My background in architecture (10 long but amazing years) has given me me a strong foundation in designing spatial environments which I now apply in creating digital experiences. My goal is to design and build products which aim to make this a more beautiful, kind, and productive world and I understand how these products work - inside and out.'/>
                    <AboutImageRound
                    src={OzzyImage}
                    alt='Ozzy'/>
                </div>
            </article>
        </section>
    );
};

export default About;