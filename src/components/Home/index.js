import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Gozie
                {/* <img src={LogoTitle} alt="developer" /> */}
                  
                <span className="wave-emoji">👋</span>
                Welcome to my portfolio
                </h1>
                <h2>Full stack engineer / Python developer / Creative</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home