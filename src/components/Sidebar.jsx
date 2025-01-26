import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className='sidebar d-flex flex-column justify-content-center'>
      <nav>
        <ul className='list-unstyled d-flex flex-column p-relative mb-0'>
          <li className=''>
            <NavLink to='/home' className='links d-flex'>
              <i className="fa fa-home"></i> <span>Home</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/trending/1' className='links d-flex'>
              <i className="fa fa-fire"></i> <span>Trending</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/top-rated/1' className='links d-flex'>
              <i className="fa fa-star"></i> <span>Top Rated</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/in-theatres/1' className='links d-flex'>
              <i className="fa fa-calendar "></i> <span>Theaters</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/tv-series/1' className='links d-flex'>
              <i className="fa fa-tv "></i> <span>Tv Series</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/bookmarks/1' className='links d-flex'>
              <i className="fa fa-bookmark"></i> <span>Bookmark</span>
            </NavLink>
          </li>

          <div className="active-bg"></div>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar