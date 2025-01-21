import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between mx-3  ">
            <div className="flex mt-4 ml-3">
                <img src="../movie.jpg" className='logo' alt="movieflix logo"/>
                <Link to="/homr">
                    <h2 className="text-3xl text-white mt-4 ml-5">MovieFlix</h2>
                </Link>
            </div>
            <div className="mt-4 ">
                <select className="bg-gray-800 text-white p-3 rounded">
                    <option>Movie</option>
                    <option>Series</option>
                </select>
                <input type="text"
                    placeholder="search Movies"
                    className="p-3 w-64 md:w-80 bg-white-800 text-black placeholder-white-400"
                />
                <button className="p-3 bg-gray-800 rounded">🔍</button>
            </div>
        </div>
    )
}

export default Navbar;