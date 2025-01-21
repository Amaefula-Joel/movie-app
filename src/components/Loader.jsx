import '../styles/loader.css';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', minHeight: '500px' }}>
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    );
}

export default Loader;