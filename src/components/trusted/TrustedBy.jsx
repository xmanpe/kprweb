// import css
import './TrustedBy.scss';

// import svgs
import ExampleLogo from '../../svgs/OCBC Logo.svg';

const TrustedBy = () => {
    return (
        <section className="trusted_section">
            <p>Bekerjasama dengan</p>
            <div className="logo_wrapper">
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />   
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />  
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" /> 
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />  
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />  
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" /> 
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" /> 
                </div>
                <div className="the-logo">
                    <img src={ExampleLogo} alt="OCBC Indonesia" />
                </div>
            </div>
            <br />
            <br />
            <p style={{fontSize: '14px', opacity: '0.7'}}>+ beberapa developer lainnya</p>
        </section>
    );
}
 
export default TrustedBy;