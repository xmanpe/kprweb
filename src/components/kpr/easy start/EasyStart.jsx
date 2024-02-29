// import react
import { useState, useRef } from 'react';

// import css
import './EasyStart.scss';

// import images
import Simulasi from '../../../images/KPR/Simulasi.png';

// import svgs
import RightArrow from '../../../svgs/Right Arrow.svg';
import RedRightArrow from '../../../svgs/Red Right Arrow.svg';
import Check from '../../../svgs/Check.svg';

const EasyStart = () => {
    const [isContentVisible, setContentVisible] = useState(false);

    const toggleContentVisibility = () => {
        setContentVisible(prevState => !prevState);
    };

    const syaratSectionRef = useRef(null);

    const handleScrollToSyaratSection = () => {
        syaratSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="easy-start_section">
            <div className="general-info">
                <div className="heading-info">
                    <h4>KPR Easy Start</h4>
                    {/* <div className='line'></div> */}
                    <h1>Ajukan KPR Easy Start OCBC, cicilan mulai dari Rp2 Jutaan!<br />Bonus tabungan emas & bisa pergi umroh/haji!</h1>
                    <div className="button_wrapper">
                        <button className='ajukan' onClick={() => window.open("https://www.ocbc.id/id/kalkulator/kepemilikan-rumah/form-kpr", "_blank")}>Ajukan KPR
                            <img src={RightArrow} alt="Arrow" />
                        </button>
                        {/* <button className='syarat' onClick={toggleContentVisibility}>Syarat & Ketentuan
                        </button> */}
                    </div>
                </div>
                <div className='check_wrapper'>
                    <div className='each-check'>
                        <img src={Check} alt="Check" />
                        <p>DP ringan</p>
                    </div>
                    <div className='each-check'>
                        <img src={Check} alt="Check" />
                        <p>Tenor hingga 25 tahun</p>
                    </div>
                    <div className='each-check'>
                        <img src={Check} alt="Check" />
                        <p>Cicilan terjangkau</p>
                    </div>
                </div>
                <div className='image_section'>
                    <div className='image_wrapper'>
                        <div className='each-image'>
                            <img src={Simulasi} alt="Photo 1" />
                        </div>
                        <div className='each-image'>
                            <img src={Simulasi} alt="Photo 2" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Lectus dolor cursus ipsum mauris morbi pellentesque. Quis diam duis cursus arcu in facilisi lectus velit. Duis amet feugiat sed posuere risus. Sagittis pretium at ut elementum id. Elit molestie facilisi sed cum egestas lacus dui. Et felis enim consectetur lectus non viverra tortor. Sagittis mi cursus aliquam risus est facilisis ut. Magna ipsum sociis a nibh. Tristique nunc urna tincidunt fermentum cursus lorem et.</p>
                </div>
                <div className='simulation'>
                    <p>Kalkulator Simulasi Cicilan KPR</p>
                    <button>Coba
                        <img src={RightArrow} alt="Arrow" />
                    </button>
                </div>
            </div>
            <div className="syarat-ketentuan" id='syarat_section' ref={syaratSectionRef}>
                <div className='the-title' onClick={toggleContentVisibility}>
                    <h1>Syarat & Ketentuan KPR Easy Start</h1>
                    <img src={RedRightArrow} alt="Arrow" style={{ transform: isContentVisible ? 'rotate(-90deg)' : 'rotate(0deg)' }} />
                </div>
                {isContentVisible && (
                    <div className='the-content'>
                        <div className='table_section'>
                            <p>Wajib membuka 1 rekening Taka (Tabungan Berjangka) baru minimum 1 tahun dengan tiering sebagai berikut:</p>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Jangka Waktu Minimum</th>
                                            <th>Minimum angsuran TAKA</th>
                                            <th>Minimum TANDA HOLD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='colspan' colSpan={3}>Plafond ≤ Rp1 Miliar</td>
                                        </tr>
                                        <tr>
                                            <td>12 Bulan</td>
                                            <td>Rp600.000/bulan</td>
                                            <td rowSpan={3}>n/a</td>
                                        </tr>
                                        <tr>
                                            <td>24 Bulan</td>
                                            <td>Rp350.000/bulan</td>
                                        </tr>
                                        <tr>
                                            <td>36 Bulan</td>
                                            <td>Rp250.000/bulan</td>
                                        </tr>
                                        <tr>
                                            <td className='colspan' colSpan={3}>Plafond {'>'} Rp1 Miliar s.d ≤ Rp5 Miliar</td>
                                        </tr>
                                        <tr>
                                            <td>12 Bulan</td>
                                            <td>Rp1.500.000/bulan</td>
                                            <td>Rp18 Juta</td>
                                        </tr>
                                        <tr>
                                            <td>24 Bulan</td>
                                            <td>Rp750.000/bulan</td>
                                            <td>Rp15 Juta</td>
                                        </tr>
                                        <tr>
                                            <td>36 Bulan</td>
                                            <td>Rp500.000/bulan</td>
                                            <td>Rp10 Juta</td>
                                        </tr>
                                        <tr>
                                            <td className='colspan' colSpan={3}>Plafond {'>'} Rp5 Miliar</td>
                                        </tr>
                                        <tr>
                                            <td>12 Bulan</td>
                                            <td>Rp3.000.000/bulan</td>
                                            <td>Rp35 Juta</td>
                                        </tr>
                                        <tr>
                                            <td>24 Bulan</td>
                                            <td>Rp1.500.000/bulan</td>
                                            <td>Rp33 Juta</td>
                                        </tr>
                                        <tr>
                                            <td>36 Bulan</td>
                                            <td>Rp1.000.000/bulan</td>
                                            <td>Rp30 Juta</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className='info-selengkapnya' onClick={() => window.open("https://www.ocbc.id/id/individu/pinjaman/kredit-pemilikan-rumah/kpr-easy-start", "_blank")}>Info Selengkapnya</button>
                        </div>
                        <div className='more-info_section'>
                            <h1>Syarat & Ketentuan Bonus Saldo Tabungan Emas</h1>
                            <ul>
                                <li>Berlaku untuk <b>Fasilitas Baru</b> dan <b>Fasilitas <i>Top Up</i></b> yang sudah dicairkan atas pembiayaan KPR Syariah (KPR iB). <br />(Note: Untuk fasilitas <i>Top Up</i>, akan diperhitungkan dari nilai plafon <i>Top Up</i> nya saja)</li>
                                <li>Setiap pencairan fasilitas KPR Syariah per Nasabah akan mendapatkan hadiah berupa saldo Tabungan Emas sebagai berikut:</li>
                                <div className='table-container' style={{margin: "12px 0px"}}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Plafon</th>
                                                <th>Hadiah Saldo Tabungan Emas</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>≥ Rp500 juta s.d &lt; Rp1 miliar </td>
                                                <td>Rp1 juta</td>
                                            </tr>
                                            <tr>
                                                <td>≥ Rp1 miliar</td>
                                                <td>Rp1,5 juta</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <li>Nasabah <b>diwajibkan</b> untuk <b>di-<i>cover</i> oleh asuransi</b>, apabila terdapat pengajuan diskon asuransi hanya dapat diberikan dengan maksimal diskon 10% (ketentuan maksimal diskon tersebut dikecualikan pada pembiayaan yang diberikan untuk Karyawan OCBC).</li>
                                <li>Bonus saldo Tabungan Emas tidak berlaku kelipatan.</li>
                            </ul>
                        </div>
                        <div className='more-info_section'>
                            <h1>Syarat & Ketentuan Program Bonus Voucher Umroh/Haji</h1>
                            <p><b>Syarat & Ketentuan:</b></p>
                            <ul>
                                <li>Berlaku untuk pengajuan fasilitas KPR Syariah iB Musyawarah Mutanaqisah (Reguler dan Easy Start).</li>
                                <li>Minimum plafond Rp500 juta dengan Ujrah/Equivalent rate sesuai ketentuan program.</li>
                                <li>Minimum Tenor 15 tahun.</li>
                            </ul>
                            <p><b>Hadiah:</b></p>
                            <ul>
                                <li>Hadiah dalam bentuk Voucher Umroh atau porsi Haji senilai Rp25 juta.</li>
                                <li>Hadiah tidak dapat diuangkan atau diganti dengan hadiah lain.</li>
                                <li>Hadiah dapat dialihkan kepada orang lain yang ditunjuk oleh Nasabah melalui Surat Pernyataan yang ditandatangi oleh Nasabah.</li>
                                <li>Apabila harga paket umroh melebihi nilai voucher yang diberikan maka nasabah harus menambah selisihnya agar dapat sesuai dengan harga yang terbaru dari Biro perjalanan umroh yang telah bekerjasama dengan OCBC Syariah.</li>
                                <li>Untuk Hadiah berupa Voucher Umroh:</li>
                                <ul>
                                    <li>Apabila harga paket Umroh melebihi nilai Voucher yang diberikan, maka Nasabah harus menambah selisihnya agar dapat sesuai dengan harga yang diinformasikan dari Biro Perjalanan Umrah yang telah bekerjasama dengan OCBC Syariah.</li>
                                    <li>Voucher Umroh hanya dapat dipergunakan untuk jadwal keberangkatan yang telah ditentukan oleh Biro perjalanan Umroh yang telah bekerjasama dengan OCBC Syariah.</li>
                                </ul>
                                <li>Untuk Hadiah berupa Porsi Haji, Nasabah akan diarahkan untuk melakukan pembukaan Rekening Tabungan Jemaah Haji (RTJH) serta permorsian awal di OCBC Syariah.</li>
                            </ul>
                        </div>
                        <div className='more-info_section'>
                            <h1>Tarif dan Ketentuan Pelunasan</h1>
                            <div className='table-container' style={{margin: "12px 0px"}}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{textAlign: 'left'}}>Tarif</th>
                                            <th style={{textAlign: 'left'}}>Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{textAlign: 'left', borderRight: '1px solid rgba(0, 0, 0, 0.116)'}} rowSpan={2}>KPR IB</td>
                                            <td style={{textAlign: 'left'}}>Biaya Admin pelunasan</td>
                                            <td style={{textAlign: 'left'}}>5% dalam masa holding period, 3% setelah holding period berakhir s/d jatuh tempo pembiayaan</td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'left'}}>Biaya penggantian hadiah pelunasan sebelum jatuh tempo</td>
                                            <td style={{textAlign: 'left'}}>
                                                <b>Skema Pergantian Hadiah</b>
                                                <ul>
                                                    <li>Masa Holding Period Rp25 Juta</li>
                                                    <li>Setelah melewati masa holding period akan diperhitungkan menyusut sesuai dengan kebijakan Bank</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <h3>Keberangkatan (Umroh)</h3>
                            <p>Jadwal keberangkatan dalam 2 periode yaitu bulan Agustus 2024 dan bulan Mei 2025. Untuk tanggal keberangkatan akan diinformasikan kepada Nasabah selambatnya 2 bulan sebelum tanggal keberangkatan begitu pula jika ada perubahan jadwal keberangkatan akan disampaikan kepada Nasabah selambatnya 2 bulan sebelum tanggal keberangkatan.</p>
                        </div>
                    </div>
                )}
            </div>

        </section>
    );
}

export default EasyStart;