import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faGitAlt, faHtml5, faJsSquare, faReact, faCss3 } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
        // Cleanup function!
        // Chat gpt helped me with this. It's important to clear the timer when the component unmounts.
        //otherwise it will keep trying to set the state after the component has been unmounted and create an error.
        return () => clearTimeout(timer);
    }, [])
    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray ={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p> Who I am and what i'm looking for in a company</p>
                <p> Some of my defining qualities </p>
                <p> Maybe something iteresting or hobbies </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon = {faAngular} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon = {faCss3} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon = {faGitAlt} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon = {faHtml5} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon = {faJsSquare} color='#EfD81d'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon = {faReact} color='#EC4D28'/>
                    </div>
                </div>
            </div>

        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About