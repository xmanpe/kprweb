// import react
import React, { useState, useRef } from 'react';

// import css
import './Kpr.scss';

// import images
import KPREasyStart from '../../images/KPR/KPR Easy Start.png';
import KPRKendali from '../../images/KPR/KPR Kendali.png';

// import svgs
import CircleCheck from '../../svgs/Circle Check.svg';

// import components
import EasyStart from './easy start/EasyStart';
import Kendali from './kendali/Kendali';

const Kpr = () => {
    const options = [
        {
            id: 'easyStart',
            image: KPREasyStart,
            title: 'KPR Easy Start',
            description: null,
            benefits: [
                'DP ringan',
                'Tenor hingga 25 tahun',
                'Cicilan terjangkau',
            ]
        },
        {
            id: 'kendali',
            image: KPRKendali,
            title: 'KPR Kendali',
            description: null,
            benefits: [
                'Kendalikan bunga KPR',
                'Kendalikan dana tabungan',
                'Kendalikan jangka waktu'
            ]
        }
    ];

    const [selectedOption, setSelectedOption] = useState('easyStart');

    const handleOptionClick = (option) => {
        setSelectedOption(prevOption => (prevOption === option ? null : option));
    };

    const kprSectionRef = useRef(null);

    const scrollToKprSection = () => {
        kprSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section className={`kpr_section`} id='kpr_section' ref={kprSectionRef}>
                <div className="heading">
                    <h1>Detail</h1>
                    <p>Klik KPR berikut untuk melihat informasi lebih detail.</p>
                </div>
                <div className="option_wrapper">
                    {options.map(option => (
                        <div key={option.id} className={`each-option ${selectedOption === option.id ? 'active' : ''}`} onClick={() => handleOptionClick(option.id)} style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 100%), url('${option.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <img src={CircleCheck} alt="Circle Check" />
                            <div className="title-subtitle">
                                <h1>{option.title}</h1>
                                <p>{option.description}</p>
                            </div>
                            <div className="small-benefit_wrapper">
                                {option.benefits.map((benefit, index) => (
                                    <div key={index} className="each-small-benefit">
                                        <p>{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        {selectedOption === 'easyStart' && <EasyStart />}
        {selectedOption === 'kendali' && <Kendali />}
        </>
    );
};

export default Kpr;
