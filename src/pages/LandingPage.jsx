import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api'; // Import the API function
import '../styles/LandingPage.css';

const frequentlyAskedQuestion = [
  {
    heading: "What is Movieflix?",
    answer: "Movieflix is a streaming service that allows you to subscribe and watch a wide variety of television shows, movies, and documentaries."
  },
  {
    heading: "How do I sign up for Movieflix?",
    answer: "To sign up for Movieflix, simply click on the 'Sign Up' button on our homepage and follow the prompts to create an account."
  },
  {
    heading: "What devices can I use to watch Movieflix?",
    answer: "You can watch Movieflix on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
  },
  {
    heading: "How much does Movieflix cost?",
    answer: "Movieflix offers various pricing plans to fit your needs. Our basic plan starts at ₦2,200 per month."
  },
  {
    heading: "Can I cancel my Movieflix subscription at any time?",
    answer: "Yes, you can cancel your Movieflix subscription at any time through your account settings."
  },
  {
    heading: "Is Movieflix available in my country?",
    answer: "Movieflix is available in many countries. Check our website for availability."
  }
];

const LandingPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results.slice(0, 6)); // Get the first 6 movies
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="main-container">
      <div className="hero-container d-flex p-relative">
        <div className="hero-background" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.69) 20%, rgba(0, 0, 0, 0.96)), url('/hero-image.jpg')` }}></div>
        <div className='hero-content flex-column d-flex p-relative w-100'>
          {/* navbar starts */}
          <nav className="navbar navbar-expand-lg navbar-dark flex-grow-0">
            <div className="container d-flex align-items-center">
              <Link className="navbar-brand font-weight-bold" to="/" style={{ fontSize: '30px' }}>MOVIEFLIX</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/home" className='btn btn-danger px-4'>Explore Now</Link>
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
                <h1 className='mb-2'>Discover unlimited movies, TV shows, and more</h1>
                <p className='mb-4'>Experience the ultimate entertainment destination with a vast library of movies, TV shows, and original content. Start your journey to endless entertainment today!</p>
                <Link to="/home" className='btn btn-danger px-4'>Explore Now</Link>
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
            {trendingMovies.map(movie => (
              <div key={movie.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='' style={ {aspectRatio: '2/3'} } />
                <h6 className='my-3 mb-2 text-center font-italic'>{movie.title}</h6>
                <Link to={`/details/movie/${movie.id}`} className='btn btn-block btn-light'>Full Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* trending movies section ends */}
      {/* reasons section starts*/}
      <section className="reasons py-5">
        <div className="container text-white">
          <h2 className='mb-4'>More Reasons To Join</h2>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Discover New Favorites</h4>
                  <p>Find movies and TV shows tailored to your taste.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Get Detailed Insights</h4>
                  <p>Uncover cast, crew, and reviews for your favorite shows.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Explore Similar Titles</h4>
                  <p>Find movies and TV shows similar to the ones you love.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4>Stay Up-to-Date</h4>
                  <p>Get notified about new releases and upcoming premieres.</p>
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
          <div id="accordion" className="text-white">
            {frequentlyAskedQuestion.map((item, index) =>
              <div key={index} className='card bg-dark mb-2'>
                <div className="card-header px-2" id={`heading${index}`}>
                  <h5 className="mb-0">
                    <button className="btn btn-block text-left text-white border-0 collapse-button d-flex justify-content-between align-items-center" style={{ fontSize: '20px', fontWeight: 500 }} data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`#collapse${index}`}>
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
              <h5 className='mb-3'>MOVIEFLIX</h5>
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
