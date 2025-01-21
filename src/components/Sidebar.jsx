import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className='sidebar d-flex flex-column justify-content-center'>
      <nav>
        <ul className='list-unstyled d-flex flex-column p-relative mb-0'>
          <li className=''><Link to='/test' className='links active d-flex'> <i className="fa fa-home"></i> <span>Home</span></Link></li>
          <li className=''><Link to='/test' className='links d-flex'> <i className="fa fa-fire"></i> <span>Trending</span></Link></li>
          <li className=''><Link to='/test' className='links d-flex'> <i className="fa fa-star"></i> <span>Top Rated</span></Link></li>
          <li className=''><Link to='/test' className='links d-flex'> <i className="fa fa-calendar "></i> <span>Theaters</span></Link></li>
          <li className=''><Link to='/test' className='links d-flex'> <i className="fa fa-tv "></i> <span>Tv Series</span></Link></li>
          <li className=''><Link to='/test' className='links d-flex'> <i className="fa fa-bookmark"></i> <span>Bookmark</span></Link></li>

          <div className="active-bg"></div>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar