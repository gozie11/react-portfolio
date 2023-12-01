import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';


const Contact = () => {
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
    return(
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t', ' ', 'M','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I'm currently working on free lance and personal projects, but am very eager 
                    to join a team and work on something bigger. If you have any questions or would
                    like to work together, please feel free to reach out to me!
                </p>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder="Email" required/>
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder="Message" required
                                ></textarea>
                            </li>
                            <li>
                                <input type='submit'className='flat-button' value='SEND'/>
                            </li>

                            
                        </ul>                    
                    </form>
                    </div>
            </div>
            </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact