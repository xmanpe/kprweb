// import react
import { useState, useRef } from 'react';

// import images
import Simulasi from '../../../images/KPR/Simulasi.png';

// import svgs
import RightArrow from '../../../svgs/Right Arrow.svg';
import RedRightArrow from '../../../svgs/Red Right Arrow.svg';
import Check from '../../../svgs/Check.svg';

const Kendali = () => {
    const [isContentVisible1, setContentVisible1] = useState(false);

    const toggleContentVisibility1 = () => {
        setContentVisible1(prevState => !prevState);
    };

    const syaratSectionRef = useRef(null);

    const handleScrollToSyaratSection = () => {
        syaratSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="easy-start_section">
            <div className="general-info">
                <div className="heading-info">
                    <h4>KPR Kendali</h4>
                    <h1>Ajukan KPR Kendali OCBC, Bunga KPR hingga 0%</h1>
                    <div className='check_wrapper'>
                        <div className='each-check'>
                            <img src={Check} alt="Check" />
                            <p>Kendalikan bunga KPR</p>
                        </div>
                        <div className='each-check'>
                            <img src={Check} alt="Check" />
                            <p>Kendalikan dana tabungan</p>
                        </div>
                        <div className='each-check'>
                            <img src={Check} alt="Check" />
                            <p>Kendalikan jangka waktu</p>
                        </div>
                    </div>
                    <div className="button_wrapper">
                        <button className='ajukan' onClick={() => window.open("https://www.ocbc.id/id/kalkulator/kepemilikan-rumah/form-kpr", "_blank")}>Ajukan KPR
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
                <div className='table_section'>
                    <p>Info lebih lanjut terkait produk KPR Kendali langsung klik <a style={{color: '#E30613'}} href="https://www.ocbc.id/id/individu/pinjaman/kredit-pemilikan-rumah/kpr-kendali" target='_blank'>disini</a></p>
                </div>
            </div>
        </section>
    );
}

export default Kendali;