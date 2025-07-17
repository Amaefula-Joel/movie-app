import { Link } from 'react-router-dom';

const CtaButton = ({extraStyle={}, text, linkTo="/home"}) => {

    return (
        <button>
            <Link to={linkTo} className='text-white bg-pink-500 sm:px-6 px-4 py-1.5 sm:text-lg text-sm inline-block' style={extraStyle}>{text}</Link>
        </button>
    )
}

export default CtaButton;