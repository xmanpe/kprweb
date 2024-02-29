// import react
import { useState, useEffect } from 'react';

// import css
import './Navigation.scss';

// import svgs
import OCBCLogo from '../../svgs/OCBC Logo.svg';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 1) { // Adjust the scroll position threshold as needed
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="nav_padding">
            <nav className={`nav_section ${scrolled ? 'scrolled' : ''}`}>
                <img src={OCBCLogo} alt="Logo" />
                {scrolled && (
                    <button onClick={() => window.open("https://www.ocbc.id/id", "_blank")}>
                        Website Utama
                    </button>
                )}
            </nav>
        </section>
    );
}

export default Navigation;