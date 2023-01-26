
import './socials.styles.scss';

const Social = () => {
    return(
        <div className='socials-container'>
            <a href='https://www.linkedin.com/in/alexpunderwood/' target='_blank'>
                <img className='linkedin-img'
                    src={require('../../assets/Linkedin-logo-icon-png.png')} />
            </a>
            <span className='text'>View my LinkedIn or GitHub by clicking on the image</span>
            <a href='https://github.com/atraincreations' target='_blank'>
                <img className='github-img' 
                    src={require('../../assets/Octicons-mark-github.svg.png')} />
            </a>
        </div>
    )
}

export default Social;
