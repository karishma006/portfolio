import { NavLink } from 'react-router-dom';
import './Subheader.scss';

const Subheader = ({ text }) => {
    return (
        <div className='subheader'>
            <NavLink to='/work' className='subheader__link'>{text}</NavLink>
        </div>
    );
};

export default Subheader;