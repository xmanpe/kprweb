// import css
import './TrustedBy.scss';

// import svgs
import ExampleLogo from '../../svgs/OCBC Logo.svg';

const TrustedByEasy = () => {
    const developers = [
        { name: 'Asana Residence', region: 'Bogor' },
        { name: 'Permata Cimanggis', region: 'Bogor' },
        { name: 'CitraGarden Serpong', region: 'Tangerang' },
        { name: 'CitraGarden Bintaro', region: 'Tangerang Selatan' },
        { name: 'Citra City Sentul', region: 'Bogor' },
        { name: 'Citraland Utara', region: 'Surabaya' },
        { name: 'Telaga Kahuripan', region: 'Bogor' },
        { name: 'Grand Tenjo Residence', region: 'Bogor' },
        { name: 'Memora House', region: 'Tangerang' },
        { name: 'Provenance House', region: 'Tangerang Selatan' },
        { name: 'Emerald City', region: 'Bogor' },
        { name: 'Emeral Neopolis', region: 'Karawang' },
        { name: 'Giantara Serpong City', region: 'Tangerang' },
        { name: 'Terranea Homes', region: 'Tangerang' },
        { name: 'Naraya Residence', region: 'Bogor' },
        { name: 'Serpong Garden Tree', region: 'Tangerang' },
        { name: 'Apartemen West Vista', region: 'Jakarta Barat' },
        { name: 'Mustika Garden Tamansari', region: 'Bekasi' },
        { name: 'The Avoria', region: 'Bogor' },
        { name: 'Kemang Eminence', region: 'Bogor' },
        { name: 'OCBD Bogor', region: 'Bogor' },
        { name: 'Permata Residence Bogor 2', region: 'Bogor' },
        { name: 'The Manzil Bogor', region: 'Bogor' },
        { name: 'Anwa Residence Puri', region: 'Jakarta Barat' },
        { name: 'Springhill Yume Green Residences', region: 'Tangerang' },
        { name: 'Apartemen Permata Hijau Suites', region: 'Jakarta Selatan' },
        { name: 'Smanea Hills', region: 'Bogor' },
        { name: 'Shila At Sawangan', region: 'Depok' },
        { name: 'Vila Rizki Insaani', region: 'Tangerang' },
        { name: `DE'LORA`, region: 'Bogor' },
        { name: 'Alana Regency Tambak Oso', region: 'Surabaya' },
        { name: 'Amartha Safira', region: 'Surabaya' },
        { name: 'Amesta Living', region: 'Surabaya' },
        { name: 'Central Park Juanda', region: 'Surabaya' },
        { name: 'Central Park MERR', region: 'Surabaya' },
        { name: 'Eastern Park Residence', region: 'Surabaya' },
        { name: 'Natura Residence', region: 'Surabaya' },
        { name: 'Citraland Tallasa City', region: 'Makassar' },
        { name: 'Apartemen Klaska Residence', region: 'Surabaya' },
        { name: 'Royal Sentraland BTP', region: 'Makassar' },
        { name: 'SWP Residence', region: 'Surabaya' },
        { name: 'Austinville', region: 'Malang' },
        { name: 'Greenland At Tidar', region: 'Malang' },
        { name: 'Kalem Residence', region: 'Malang' },
        { name: 'The OZ', region: 'Malang' },
        { name: 'Citraland City Kedamean', region: 'Surabaya' },
        { name: 'CitraGarden Makassar', region: 'Makassar' },
        { name: 'SkyVille Residence', region: 'Surabaya' },
        { name: 'Grand Alana Regency', region: 'Surabaya' },
        { name: 'Green Mansion Juanda Tahap 6', region: 'Surabaya' },
        { name: 'Pondok Tjandra Indah', region: 'Surabaya' },
        { name: 'Puri Safira Regency', region: 'Surabaya' },
        { name: 'Regency One Eastpoint', region: 'Surabaya' },
        { name: 'Opra City', region: 'Surabaya' },
        { name: 'The Savana Regency', region: 'Surabaya' },
    ];

    return (
        <section className="trusted_section">
            <p>List developer yang bekerja sama dengan KPR Easy Start OCBC</p>
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

export default TrustedByEasy;
