import './resume-img.styles.scss';

const Resume = () => {
    return(
        <div className='resume-container'>
            <img className='resume-img' src={require('../../assets/alex resume 012023-FEE.png')} />
        </div>
    );
};


export default Resume;