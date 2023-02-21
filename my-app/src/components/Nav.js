import { useState } from 'react';
import Header from './Header';
import Hamburger from '../assets/🦆 icon _hamburger menu.svg';
import Close from '../assets/home icon.svg';

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav>
            <button className="burger-icon" onClick={handleToggle}>
                <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
            </button>
        </nav>
    );
}
export default Navbar;
