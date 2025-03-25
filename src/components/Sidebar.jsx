import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className='sidebar flex flex-col justify-center'>
      <nav>
        <ul className='list-unstyled flex flex-col relative mb-0'>
          <li className=''>
            <NavLink to='/home' className='links flex'>
              <i className="fa fa-home"></i> <span>Home</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/trending/1' className='links flex'>
              <i className="fa fa-fire"></i> <span>Trending</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/top-rated/1' className='links flex'>
              <i className="fa fa-star"></i> <span>Top Rated</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/in-theatres/1' className='links flex'>
              <i className="fa fa-calendar "></i> <span>Theaters</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/tv-series/1' className='links flex'>
              <i className="fa fa-tv "></i> <span>Tv Series</span>
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/bookmarks/1' className='links flex'>
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