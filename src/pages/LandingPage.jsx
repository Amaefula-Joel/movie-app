import { Link } from 'react-router-dom';
// import FAQAccordion from '../components/Accordion';
// import { useState } from 'react';

import './LandingPage.css';

const frequentlyAskedQuestion = [
  {
    heading: "What is Weflix",
    answer: "Weflix is a streaming service that offers a wide variety of television shows, movies, and documentaries. With Weflix, you can enjoy award-winning series, movies, TV shows, and documentaries"
  },
  {
    heading: "How do I sign up for Weflix",
    answer: "To sign up for Weflix, simply click on the 'Sign Up' button on our homepage and follow the prompts to create an account. You can also sign up through our mobile app."
  },
  {
    heading: "What devices can I use to watch Weflix",
    answer: "You can watch Weflix on a variety of devices, including Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
  },
  {
    heading: "How much does Weflix cost",
    answer: "Weflix offers a variety of pricing plans to fit your needs. Our basic plan starts at ₦2,200 per month, and we also offer a premium plan with additional features."
  },
  {
    heading: "Can I cancel my Weflix subscription at any time",
    answer: "Yes, you can cancel your Weflix subscription at any time. Simply go to your account settings and click on the 'Cancel Subscription' button."
  },
  {
    heading: "Is Weflix available in my country",
    answer: "Weflix is available in many countries around the world. To see if Weflix is available in your country, simply visit our website and check our availability page."
  }
];

const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="hero-container d-flex p-relative">

        <div className="hero-background" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.69) 20%, rgba(0, 0, 0, 0.96)), url('/hero-image.jpg')` }}></div>

        <div className='hero-content flex-column d-flex p-relative w-100'>

          {/* navbar starts */}
          <nav className="navbar navbar-expand-lg navbar-dark flex-grow-0">
            <div className="container d-flex align-items-center">
              <Link className="navbar-brand font-weight-bold" to="/" style={{ fontSize: '30px' }}>WEFLIX</Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
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

            <div className="content text-white py-5 px-4" style={{ maxWidth: '500px' }}>

              <div className='text-center'>
                <h1 className='mb-0'>Unlimited movies, TV shows, and more</h1>
                <p className='mb-4'>Starts at ₦2,200. Cancel anytime.</p>
              </div>

              <div>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                {/* <form>

                      </form> */}
              </div>
            </div>

          </div>
          {/* Hero content ends */}
        </div >

      </div>

      {/* trending movies section starts */}
      <section className='text-white py-5'>
        <div className="container">
          <h2 className='mb-5'>Trending Now</h2>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img src="/movie-poster-2.jpg" alt="" className='img-fluid' />
              <h6 className='mt-2 font-italic'>Movie Title</h6>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img src="/movie-poster-1.jpg" alt="" className='img-fluid' />
              <h6 className='mt-2 font-italic'>Movie Title</h6>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img src="/movie-poster-2.jpg" alt="" className='img-fluid' />
              <h6 className='mt-2 font-italic'>Movie Title</h6>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img src="/movie-poster-1.jpg" alt="" className='img-fluid' />
              <h6 className='mt-2 font-italic'>Movie Title</h6>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img src="/movie-poster-2.jpg" alt="" className='img-fluid' />
              <h6 className='mt-2 font-italic'>Movie Title</h6>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img src="/movie-poster-1.jpg" alt="" className='img-fluid' />
              <h6 className='mt-2 font-italic'>Movie Title</h6>
            </div>
          </div>
        </div>
      </section>
      {/* trending movies section ends */}
      fa
      {/* reasons section starts*/}
      <section className="reasons py-5">
        <div className="container text-white">
          <h2 className='mb-4'>More Reasons To Join</h2>

          <div className="row">
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Enjoy on your TV</h4>

                  <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Enjoy on your TV</h4>

                  <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Enjoy on your TV</h4>

                  <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Enjoy on your TV</h4>

                  <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reasons section starts*/}

      {/* frequently asked section starts */}
      <section className="freq-asked py-4">
        <div className="container text-white">
          <h2 className="mb-4">Frequently Asked Questions</h2>

          <div id="accordion" classname="text-white">

            {frequentlyAskedQuestion.map((item, index) =>
              <div key={index} className='card bg-dark mb-2'>
                <div className="card-header px-2" id={`heading${index}`}>
                  <h5 className="mb-0">
                    <button className="btn btn-block text-left text-white border-0 collapse-button d-flex justify-content-between align-items-center" style={{fontSize: '20px', fontWeight: 500}} data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`#collapse${index}`}>
                      <span>{item.heading}</span>

                      <i className="fa fa-plus"></i>
                      <i className="fa fa-close"></i>
                    </button>
                  </h5>
                </div>

                <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
                  <div className="card-body">
                    {item.answer}
                  </div>
                </div>
              </div>)}

          </div>

        </div>
      </section>
      {/* frequently asked section ends */}


      {/* footer starts */}
      <footer className="footer py-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
              <h5 className='mb-3'>WEFLIX</h5>
              <p className='text-white-50'>Watch your favorite movies and TV shows anywhere, anytime.</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
              <h5 className='mb-3'>Help</h5>
              <ul className="list-unstyled">
                <li><a href="index.html" className='text-light mb-2'>FAQ</a></li>
                <li><a href="index.html" className='text-light mb-2'>Contact Us</a></li>
                <li><a href="index.html" className='text-light mb-2'>Terms of Use</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
              <h5 className='mb-3'>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="index.html" className='text-light mb-2'>Facebook</a></li>
                <li><a href="index.html" className='text-light mb-2'>Twitter</a></li>
                <li><a href="index.html" className='text-light mb-2'>Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* footer ends */}
    </div>
  );
}

export default LandingPage;