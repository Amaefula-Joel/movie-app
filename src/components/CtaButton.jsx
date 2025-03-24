import { Link } from 'react-router-dom';

const CtaButton = ({extraStyle={}, text}) => {

    return (
        <button>
            <Link to="/home" className='text-white bg-red-500 sm:px-6 px-4 py-1.5 sm:text-lg text-sm inline-block' style={extraStyle}>{text}</Link>
        </button>
    )
}

export default CtaButton;