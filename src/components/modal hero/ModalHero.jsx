// import css
import './ModalHero.scss';

// import svgs
import CloseButton from '../../svgs/Close Button.svg';
import RightArrow from '../../svgs/Right Arrow.svg';

const ModalHero = ({ onClose }) => {
    return (
        <>
            <div className='overlay'></div>
            <div className='modal-hero'>
                <div className='close-button'>
                    <img src={CloseButton} alt="Close" onClick={onClose} />
                </div>
                <div className='content_wrapper'>
                    <div className='box'>
                        <div className='title'>
                            <h1>KPR Easy Start</h1>
                            <p>Jodohnya rumah impian para milenial!</p>
                        </div>
                        <button onClick={() => window.open("https://www.ocbc.id/id/kalkulator/kepemilikan-rumah/form-kpr", "_blank")}>Ajukan
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </div>
                    <div className='box'>
                        <div className='title'>
                            <h1>KPR Kendali</h1>
                            <p>Jodohnya yang mau nambah aset properti!</p>
                        </div>
                        <button onClick={() => window.open("https://www.ocbc.id/id/kalkulator/kepemilikan-rumah/form-kpr", "_blank")}>Ajukan
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ModalHero;