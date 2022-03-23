import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <h1 className='header__logo__text'>TheKayXp</h1>
            </div>
            <nav className='header__nav'>
                <NavLink exact to='/' className='header__nav__link' activeClassName='header__nav__link--active'>Home</NavLink>
                <NavLink to='/work' className='header__nav__link' activeClassName='header__nav__link--active'>Projects</NavLink>
                <NavLink to='/about' className='header__nav__link' activeClassName='header__nav__link--active'>About</NavLink>
                <NavLink to='/contact' className='header__nav__link' activeClassName='header__nav__link--active'>Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;