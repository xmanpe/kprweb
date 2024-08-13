import React, { useState } from 'react';
import Hero from "../components/hero/Hero";
import Kpr from "../components/kpr/Kpr";
import TrustedByEasy from "../components/trusted/TrustedByEasy";
import TrustedByKendali from "../components/trusted/TrustedByKendali";
import Footer from "../components/footer/Footer";

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('easyStart');

    const handleSelectedOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
            <Hero />
            <Kpr onOptionChange={handleSelectedOptionChange} />
            {selectedOption === 'easyStart' && <TrustedByEasy />}
            {selectedOption === 'kendali' && <TrustedByKendali />}
            <Footer />
        </>
    );
}
 
export default Home;
