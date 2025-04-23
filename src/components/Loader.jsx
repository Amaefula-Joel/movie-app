import '../styles/loader.css';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen min-h-[500px]'>
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