import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    return (
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray ={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p> Who I am and what i'm looking for in a company</p>
                <p> Some of my defining qualities </p>
                <p> Maybe something iteresting or hobbies </p>
            </div>
        </div>
    )
}

export default About