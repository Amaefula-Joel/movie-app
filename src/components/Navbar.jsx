import { Link } from "react-router-dom";

import '../styles/navbar.css';

const Navbar = () => {
    return (

        <div className="d-block d-md-flex justify-content-between align-items-center px-md-4 px-3 py-4">
            <div className="d-flex align-items-center">
            <img src="../movie.jpg" className='logo mr-3' alt="movieflix logo"/>
            <Link to="/" className="brand text-white" style={{fontSize: '20px'}}>MovieFlix</Link>
            </div>

            <div className="d-flex align-items-center mt-3 mt-md-0">
                <form className="form-inline search-form">
                    <select className="form-control mb-sm-0 mb-2" name="search-option">
                        <option value="movie">
                            Movie
                        </option>
                        <option value="tv-series">
                            TV Series
                        </option>
                    </select>

                    <input className="form-control mb-sm-0 mb-2" type="search" placeholder="Search Movies" aria-label="Search" />

                    <button className="btn btn-light text-black" type="submit">
                        <i className="fa fa-search"></i>
                        <span className="sr-only">submit</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Navbar;