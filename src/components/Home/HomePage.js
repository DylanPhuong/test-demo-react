import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = () => {
    return (
        <div className="homepage-container">

            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Truong dai hoc Su Pham Ky Thuat</div>
                <div className='title-2'> so 1 vo van ngan</div>
                <div className='title-3'>
                    <button>Get's started. It's free</button>
                </div>
            </div>
        </div>

    );
}

export default HomePage;
