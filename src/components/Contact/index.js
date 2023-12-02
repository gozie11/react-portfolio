import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { Marker, MapContainer, TileLayer, Popup } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
        // Cleanup function!
        // Chat gpt helped me with this. It's important to clear the timer when the component unmounts.
        //otherwise it will keep trying to set the state after the component has been unmounted and create an error.
        return () => clearTimeout(timer);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_aa0iuqh',
            'template_swlvb8e',
            refForm.current,
            '4WlcgplJhXLyJ7oNB'
            )
            .then(
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send, please try again.')
                }
            ) 
    }

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
                    <form ref = {refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" 
                                name='name' 
                                placeholder="Name" 
                                required/>
                            </li>
                            <li className='half'>
                                <input type="email" 
                                name='email' 
                                placeholder="Email" 
                                required/>
                            </li>
                            <li>
                                <input type="text" 
                                name='subject' 
                                placeholder="Subject" 
                                required/>
                            </li>
                            <li>
                                <textarea name='message' 
                                placeholder="Message" 
                                required
                                ></textarea>
                            </li>
                            <li>
                                <input type='submit'className='flat-button' value='SEND'/>
                            </li>

                            
                        </ul>                    
                    </form>
                    </div>
            </div>
            
            <div className="info-map">
                Gozie Onyia <br/>
                United States, <br/>
                Austin Texas, 78613 <br/>
                <span>gozieo7@gmail.com</span>
                
            </div>
            <div className="map-wrap">
                <MapContainer center = {[30.48247, -97.85052]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[30.48247, -97.85052]}>
                    <Popup>
                        Gozie's HQ! <br /> Come Collaborate :)
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact