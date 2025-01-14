import { Link } from 'react-router-dom';

import './LandingPage.css';
// import heroImage from '/hero-image.jpg';
const LandingPage = () => {
    return (
        <div className="main-container">
            <div className="hero-container d-flex p-relative">

              <div className="hero-background" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.69) 20%, rgba(0, 0, 0, 0.96)), url('/hero-image.jpg')`}}></div>

              <div className='hero-content flex-column d-flex p-relative w-100'>
                

                {/* navbar starts */}
                <nav className="navbar navbar-expand-lg navbar-dark flex-grow-0">
                    <div className="container d-flex align-items-center">
                        <Link className="navbar-brand font-weight-bold" to="/" style={ {fontSize : '30px'} }>WEFLIX</Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample07">
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li> */}
                                <li className="nav-item active">
                                    {/* <Link className="nav-link" to="#">Home</Link> */}
                                    <button className='btn btn-danger'>Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* navbar ends */}

                {/* Hero content starts */}
                <div className="d-flex justify-content-center align-items-center flex-grow-1">

                  <div className="content text-white" style={{maxWidth: '500px'}}>

                    <div className='text-center'>
                      <h1 className='mb-0'>Unlimited movies, TV shows, and more</h1>
                      <p className='mb-4'>Starts at ₦2,200. Cancel anytime.</p>
                    </div>

                    <div>
                      <p>Ready to watch? Enter your email to create or restart your membership.</p>

                      <form>

                      </form>
                    </div>
                  </div>

                </div>
                {/* Hero content ends */}
              </div >

            </div>
        </div>
    );
}

export default LandingPage;