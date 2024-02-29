// import react
import { useState } from 'react';

// import css
import './Kendali.scss';

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

    return (
        <section className="easy-start_section">
            <div className="general-info">
                <div className="heading-info">
                    <h4>KPR Kendali</h4>
                    {/* <div className='line'></div> */}
                    <h1>Ajukan KPR Kendali OCBC, Bunga KPR hingga 0%</h1>
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
                        <p>Kendalikan Bunga KPR</p>
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
            <div className="syarat-ketentuan" id='syarat-ketentuan'>
                <div className='the-title' onClick={toggleContentVisibility}>
                    <h1>Syarat & Ketentuan KPR Kendali</h1>
                    <img src={RedRightArrow} alt="Arrow" style={{ transform: isContentVisible ? 'rotate(-90deg)' : 'rotate(0deg)' }} />
                </div>
                {isContentVisible && (
                    <div className='the-content'>
                        <div className='more-info_section'>
                            <h1>Syarat & Ketentuan TANDA KPR KENDALI</h1>
                            <ol>
                                <li><b>Tanda KPR Kendali</b> adalah salah satu produk tabungan yang dikeluarkan oleh OCBC yang dimiliki oleh nasabah perorangan dimana tabungan ini dikaitkan dengan fasilitas KPR/KMG/KPT Kendali yang diterima oleh nasabah, yang digunakan antara lain untuk: (i) pencairan fasilitas KPR/KMG/KPT Kendali, (ii) pendebetan atas segala kewajiban terhutang nasabah pada OCBC, dan (iii) saldo rekening diperhitungkan sebagai nominal pengurang pinjaman pokok dalam perhitungan bunga fasilitas KPR/KMG/KPT Kendali</li>
                                <li>Ketentuan saldo produk rekening Tanda KPR Kendali</li>
                                <div className='table-container' style={{margin: "12px 0px"}}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td style={{textAlign: 'left'}}>Setoran Awal</td>
                                                <td style={{textAlign: 'left'}}>Rp200.000,-</td>
                                            </tr>
                                            <tr>
                                                <td style={{textAlign: 'left'}}>Minimum Saldo</td>
                                                <td style={{textAlign: 'left'}}>Rp100.000,-</td>
                                            </tr>
                                            <tr>
                                                <td style={{textAlign: 'left'}}>Biaya Penutupan Rekening</td>
                                                <td style={{textAlign: 'left'}}>Rp100.000,-</td>
                                            </tr>
                                            <tr>
                                                <td style={{textAlign: 'left'}}>Biaya Administrasi per Bulan</td>
                                                <td style={{textAlign: 'left'}}>Rp25.000,-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <li>Bukti mutasi rekening Tanda KPR Kendali dalam bentuk pernyataan elektronik (<i>e-statement</i>) akan dikirimkan bersamaan dengan laporan elektronik KPR/KMG/KPT Kendali pada tanggal 8 (delapan) setiap bulannya atau sesuai dengan ketentuan yang berlaku pada OCBC.</li>
                                <li>Saldo tabungan di rekening Tanda KPR Kendali tidak mendapatkan bunga, namun jumlah saldo dalam rekening akan diperhitungkan dalam pembebanan bunga fasilitas KPR/KMG/KPT Kendali sesuai dengan ketentuan yang berlaku dalam perjanjian kredit antara Nasabah dan OCBC. <br /> <br /> Setiap akhir hari kerja, OCBC akan membandingkan sisa <i>(outstanding)</i> hutang pokok fasilitas kredit pada hari itu dengan saldo rekening Tanda KPR Kendali pada hari itu. Besarnya saldo rekening Tanda KPR Kendali yang diperhitungkan sebagai faktor pembanding terhadap sisa <i>(outstanding)</i> hutang pokok pinjaman adalah sebesar <b>80% (delapan puluh persen)</b> dari jumlah saldo harian rekening Tanda KPR Kendali atau maksimum sama dengan sisa (outstanding) hutang pokok fasilitas KPR/KMG/KPT Kendali (selanjutnya disebut <b>"Nominal Pengurang Perhitungan Bunga"</b>)</li><br />
                                <li>Apabila rekening Tanda KPR Kendali, dalam kondisi tidak aktif/dorman, dibekukan, atau diblokir atau dalam hal fasilitas KPR Kendali atau Fasilitas Kendali lainnya sedang dalam proses relaksasi/restrukturisasi kredit, maka atas saldo dalam rekening Tanda KPR Kendali ini tidak diperhitungkan sebagai Nominal Pengurang Perhitungan Bunga atas fasilitas KPR Kendali atau Fasilitas Kendali lainnya berdasarkan perjanjian kredit antara nasabah dan OCBC.</li>
                                <li>Rekening Tanda KPR Kendali tidak diperkenankan untuk ditutup selama fasilitas KPR/KMG/KPT Kendali atas nama Nasabah belum lunas sepenuhnya.</li>
                                <li>Dana yang terdapat pada rekening Tanda KPR Kendali tidak dapat dijaminkan atau diagunkan pada pihak manapun.</li>
                                <li>Bila hingga batas waktu 30 (tiga puluh) hari setelah pelunasan fasilitas KPR/KMG/KPT Kendali, Nasabah belum melakukan perubahan rekening Tanda KPR Kendali ke rekening tabungan OCBC lainnya, maka Nasabah dengan ini setuju bahwa OCBC dapat mengkonversi rekening Tanda KPR Kendali ini menjadi rekening tabungan standar OCBC yang memberikan bunga.Perubahan mana akan diberitahukan sebelumnya kepada Nasabah sesuai dengan ketentuan dan peraturan perundang-undangan yang berlaku. <br /><br />Sehubungan dengan konversi ini, apabila diperlukan dan dimintakan oleh OCBC, maka Nasabah wajib melakukan pengkinian data/informasi (<i>profile update</i>) yang terkait dengan kepemilikan rekening Nasabah pada OCBC. <br /><br /></li>
                                <li>Nasabah dengan ini menyatakan:</li>
                                <ul>
                                    <li>telah menerima, membaca, mengerti, menyetujui serta bersedia untuk mentaati Syarat dan Ketentuan Tanda KPR Kendali PT. Bank OCBC NISP, Tbk dan ketentuan terkait yang berlaku di OCBC berikut perubahannya yang akan diberitahukan oleh OCBC melalui pengumuman pada kantor OCBC atau media lainnya yang ditentukan oleh OCBC dengan memperhatikan ketentuan dan peraturan perundang-undangan yang berlaku.</li>
                                    <li>telah menerima penjelasan yang lengkap dari petugas OCBC mengenai karakteristik produk Tanda KPR Kendali dan telah mengerti serta memahami segala konsekuensi penggunaan produk Tanda KPR Kendali dimaksud, termasuk manfaat, risiko dan biaya-biaya yang melekat pada produk Tanda KPR Kendali.</li>
                                </ul>
                                <li>Atas kebijakannya, OCBC memiliki kewenangan untuk melakukan perubahan Syarat dan Ketentuan Tanda KPR Kendali. Perubahan tersebut berlaku dan mengikat Nasabah terhitung sejak tanggal diberitahukannya perubahan tersebut kepada Nasabah sesuai dengan ketentuan perundang-undangan yang berlaku.</li>
                                <li>Seluruh istilah-istilah yang digunakan dalam Syarat dan Ketentuan Tanda KPR Kendali ini mempunyai pengertian yang sama dengan Syarat dan Ketentuan Pembukaan dan Pengaturan Rekening PT Bank OCBC NISP Tbk. (<b>”Ketentuan Umum Rekening”</b>), kecuali didefinisikan lain secara tegas dalam Syarat dan Ketentuan Tanda KPR Kendali ini.</li>
                                <li>Syarat dan Ketentuan Tanda KPR Kendali ini merupakan satu kesatuan dan menjadi bagian yang tidak terpisahkan dari (i) perjanjian kredit atas fasilitas KPR/KMG/KPT Kendali yang diterima oleh nasabah dari OCBC, (ii) formulir permohonan serta Ketentuan Umum Rekening, termasuk Ketentuan Kebijakan dan Prosedur serta dokumen yang dipersyaratkan untuk rekening tabungan yang berlaku di OCBC.</li>
                            </ol>
                        </div>
                        <button className='info-selengkapnya' onClick={() => window.open("https://www.ocbc.id/id/individu/pinjaman/kredit-pemilikan-rumah/kpr-kendali", "_blank")}>Info Selengkapnya</button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default EasyStart;