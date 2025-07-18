import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  }

  return (
    <aside className={`sidebar flex flex-col justify-center gap-5 ${active ? 'open' : ''}`}>

      <div className={`md:hidden flex ${active ? 'justify-end' : 'justify-center'}`}>
        <button className="text-white p-2 text-xl" onClick={handleToggle}>
          <i className="fa-solid fa-bars-staggered" aria-hidden="true"></i>
          <span className="sr-only">Open or close Sidebar</span>
        </button>
      </div>

      <nav>
        <ul className='list-unstyled flex flex-col relative mb-0'>
          <li className=''>
            <NavLink to='/home' className='links flex'>
              <i className="fa-solid fa-house" aria-hidden="true"></i> <span>Home</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/trending/1' className='links flex'>
              <i className="fa-solid fa-fire-flame-curved" aria-hidden="true"></i> <span>Trending</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/top-rated/1' className='links flex'>
              <i className="fa-solid fa-star" aria-hidden="true"></i> <span>Top Rated</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/in-theatres/1' className='links flex'>
              <i className="fa-regular fa-calendar-days" aria-hidden="true"></i> <span>Theaters</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/tv-series/1' className='links flex'>
              <i className="fa fa-tv" aria-hidden="true"></i> <span>Tv Series</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/bookmarks' className='links flex'>
              <i className="fa-solid fa-bookmark" aria-hidden="true"></i> <span>Bookmark</span>
            </NavLink>
          </li>

          <div className="active-bg"></div>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar