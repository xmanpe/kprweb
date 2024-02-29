// import react
import { useState, useRef } from 'react';

// import css
import './Hero.scss';

// import images
import HeroImage from '../../images/Hero/Hero Banner.jpeg';

// import svgs
import RightArrow from '../../svgs/Right Arrow.svg';
import RedRightArrow from '../../svgs/Red Right Arrow.svg';
import Check from '../../svgs/Check.svg';
import RedLine from '../../svgs/Red Line.svg';

// import components
import ModalHero from '../modal hero/ModalHero';

const Hero = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const kprSectionRef = useRef(null);

    const handleScrollToKprSection = () => {
        kprSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {isModalVisible && (
                <ModalHero onClose={handleCloseModal} />
            )}
            <section className="hero_section">
                <div className='left-hero'>
                    <div className='content-hero'>
                        <div className='the-content'>
                            <div className='period'>
                                <p>Periode 1 - 31 Maret 2024</p>
                            </div>
                            <div className='title-hero'>
                                <h1>Jodoh rumah impianmu<br />di OCBC <span className='duajuta'>Property Festival<img src={RedLine} alt="Red Line" /></span> 2024!</h1>
                                <p>Jodohin rumah impianmu bersama KPR OCBC yang bekerja sama dengan berbagai developer dan dapatkan promo spesial!</p>
                            </div>
                        </div>
                        <div className='button_wrapper'>
                            <button className='ajukan' onClick={handleOpenModal}>
                                Ajukan Sekarang
                                <img src={RightArrow} alt="Right Arrow" />
                            </button>
                            {/* <button className='pelajari' onClick={handleScrollToKprSection}>
                                Pelajari Lebih Lanjut
                            </button> */}
                        </div>
                    </div>
                    <div className='benefit_wrapper'>
                        <div className='each-benefit'>
                            <img src={Check} alt="Check" />
                            <p>Cicilan KPR mulai Rp2 Jutaan</p>
                        </div>
                        <div className='each-benefit'>
                            <img src={Check} alt="Check" />
                            <p>Berhadiah Umroh/Haji</p>
                        </div>
                        <div className='each-benefit'>
                            <img src={Check} alt="Check" />
                            <p>Bonus Saldo Tabungan Emas hingga Rp1,5 Juta</p>
                        </div>
                    </div>
                </div>
                <div className='right-hero'>
                    <img src={HeroImage} alt='Hero' />
                </div>
            </section>
        </>
    );
}
 
export default Hero;