import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-antimate')
    const nameArray = ['G', 'o', 'z', 'i', 'e']
    // Below should be called welcome array
    const welcomeArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'm', 'y', ' ', 'p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    {/* maybe i can change the word to hey later */}
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m </span>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray} 
                    idx={15} />
                    {/* <img src={LogoTitle} alt="developer" /> */}
                    
                    <span className="wave-emoji">👋</span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={welcomeArray}
                    idx={22} />
                </h1>
                <h2>Full stack engineer / Python developer / Creative</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home