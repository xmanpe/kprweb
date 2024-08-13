// import css
import './TrustedBy.scss';

// import svgs
import ExampleLogo from '../../svgs/OCBC Logo.svg';

const TrustedByKendali = () => {
    const developers = [
        { name: 'Alam Sutera', region: 'Tangerang' },
        { name: 'Apartemen Arumaya', region: 'Jakarta Selatan' },
        { name: 'Royal Residence', region: 'Surabaya' },
        { name: 'Citra 8 - Aeroworld 8', region: 'Jakarta Barat' },
        { name: 'Citraland Surabaya', region: 'Surabaya' },
        { name: 'Dian Istana Regency', region: 'Surabaya' },
        { name: 'Puri 11', region: 'Tangerang' },
        { name: 'Damara Village Ubud Alaya Collection', region: 'Bali' },
        { name: 'Damara Village Jimbaran Hijau', region: 'Bali' },
        { name: 'Sanctuary Collection', region: 'Bogor' },
        { name: 'Griya Seroja Residence', region: 'Jakarta Selatan' },
        { name: 'Nava Park', region: 'Tangerang' },
        { name: 'Apartemen Savya Vasa', region: 'Jakarta Selatan' },
        { name: 'Kota Baru Parahyangan', region: 'Bandung' },
        { name: 'Wisteria', region: 'Jakarta Timur' },
        { name: 'Grand Padjajaran Residence', region: 'Bogor' },
        { name: 'Kenjeran Indah', region: 'Surabaya' },
        { name: 'Natadesa Residence', region: 'Bali' },
        { name: 'South City', region: 'Tangerang Selatan' },
        { name: 'The Tamora', region: 'Bali' },
        { name: 'Grand Pakuwon', region: 'Surabaya' },
        { name: 'Pakuwon City', region: 'Surabaya' },
        { name: 'Paramount Serpong', region: 'Tangerang' },
        { name: 'BSD City', region: 'Tangerang' },
        { name: 'Hiera', region: 'Tangerang' },
        { name: 'Apartemen Southgate', region: 'Tangerang' },
        { name: 'Summarecon Bandung', region: 'Bandung' },
        { name: 'Summarecon Serpong', region: 'Tangerang' },
        { name: 'Summarecon Crown Gading', region: 'Bekasi' },
        { name: `Synthesis Huis`, region: 'Jakarta Timur' },
        { name: 'Teratai Royal Canggu', region: 'Bali' },
        { name: 'The Tamora Canggu', region: 'Bali' },
        { name: 'Kota Baru Parahyangan', region: 'Bandung' },
        { name: 'Apartemen 31 Sudirman Suites', region: 'Makassar' },
        { name: 'Citraland City Losari', region: 'Makassar' },
        { name: 'Citraland Puncak Tidar', region: 'Malang' },
        { name: 'Grand Permata Jingga', region: 'Malang' },
        { name: 'Green Orchid Residence', region: 'Malang' },
        { name: 'Citra Garden Sidoarjo', region: 'Surabaya' },
        { name: 'Taman Wisata Regency', region: 'Surabaya' },
    ];

    return (
        <section className="trusted_section">
            <p>List developer yang bekerja sama dengan KPR Kendali OCBC</p>
            <div className='table-container' style={{border: '2px solid white'}}>
                <table>
                    <thead>
                        <tr>
                            <th style={{background: 'white', border: '2px solid white', color: '#E30613'}}>Nama Developer</th>
                            <th style={{background: 'white', border: '2px solid white', color: '#E30613'}}>Wilayah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {developers.map((developer, index) => (
                            <tr key={index}>
                                <td style={{background: 'transparent', borderTop: '2px solid white', borderRight: '2px solid white', color: 'white'}}>{developer.name}</td>
                                <td style={{background: 'transparent', borderTop: '2px solid white', color: 'white'}}>{developer.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TrustedByKendali;
