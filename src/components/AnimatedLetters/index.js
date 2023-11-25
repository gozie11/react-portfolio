import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span> 
            {
                strArray.map((char, index) => {
                    return (
                        <span key={char + index} className={`${letterClass} _${index + idx}`}>
                            {char}
                        </span>
                    )
                })
            }
        
        </span>
    )
};

export default AnimatedLetters;