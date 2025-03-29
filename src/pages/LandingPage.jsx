import { getTrendingMovies } from '../services/api'; // Import the API function
import UseFetch from "../hooks/UseFetch";


import Navbar from '../components/Navbar';
import CtaButton from '../components/CtaButton';
import MovieList from "../components/MovieList";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

import '../styles/LandingPage.css';

const frequentlyAskedQuestion = [
  {
    title: "What is Movieflix?",
    contentParagraph: "Movieflix is a streaming service that allows you to subscribe and watch a wide variety of television shows, movies, and documentaries."
  },
  {
    title: "How do I sign up for Movieflix?",
    contentParagraph: "To sign up for Movieflix, simply click on the 'Sign Up' button on our homepage and follow the prompts to create an account."
  },
  {
    title: "What devices can I use to watch Movieflix?",
    contentParagraph: "You can watch Movieflix on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
  },
  {
    title: "How much does Movieflix cost?",
    contentParagraph: "Movieflix offers various pricing plans to fit your needs. Our basic plan starts at ₦2,200 per month."
  },
  {
    title: "Can I cancel my Movieflix subscription at any time?",
    contentParagraph: "Yes, you can cancel your Movieflix subscription at any time through your account settings."
  },
  {
    title: "Is Movieflix available in my country?",
    contentParagraph: "Movieflix is available in many countries. Check our website for availability."
  }
];

const LandingPage = () => {
  // const [trendingMovies, setTrendingMovies] = useState([]);

  // const { setTheme } = useTheme();

  const { data, loading, error } = UseFetch(getTrendingMovies);

  // useEffect(() => {
  //   const fetchTrendingMovies = async () => {
  //     try {
  //       const data = await getTrendingMovies();
  //       setTrendingMovies(data.results.slice(0, 6)); // Get the first 6 movies
  //     } catch (error) {
  //       console.error("Failed to fetch trending movies:", error);
  //     }
  //   };

  //   fetchTrendingMovies();
  // }, []);

  return (
    <div className="mx-auto max-w-[1500px] dark:bg-[#151515] bg-gray-100">
      <div className="min-h-screen max-h-full flex relative">
        <div className="absolute inset-0 bg-cover" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.69) 20%, rgba(0, 0, 0, 0.96)), url('/hero-image.jpg')` }}></div>
        <div className='flex-col flex relative w-full'>
          {/* navbar starts */}
          <Navbar />
          {/* navbar ends */}
          {/* Hero content starts */}
          <div className="flex justify-center items-center grow">
            <div className="content text-gray-100 py-16 px-6 max-w-[500px]">
              <div className='text-center'>
                <h1 className='mb-5 sm:text-5xl text-3xl'>Discover unlimited movies, TV shows, and more</h1>

                <p className='mb-6'>Experience the ultimate entertainment destination with a vast library of movies, TV shows, and original content. Start your journey to endless entertainment today!</p>

                <CtaButton text="Explore Movies" />
              </div>
            </div>
          </div>
          {/* Hero content ends */}
        </div >
      </div>
      {/* trending movies section starts */}
      <section className='py-12 border-b-2 border-gray-900'>
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex items-center gap-4 mb-5">
            <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-100 border-l-4 border-gray-800 dark:border-gray-100 pl-3'>Trending Now</h2>

            {/* <button className="text-2xl">
              <Link to="/home" className=' text-gray-900 dark:text-gray-100'><i className="fa-solid fa-arrow-right-long"></i></Link>
            </button> */}
          </div>

          <div className="">
            {loading ? (
              <div>
                loading
              </div>
            ) : error ? (
              <div>
                error
              </div>
            ) : (
              <>
                <MovieList items={data.results} type="movie" /> {/* Pass the type prop */}
              </>
            )}
          </div>
        </div>
      </section>
      {/* trending movies section ends */}
      {/* reasons section starts*/}
      <section className="reasons py-12">
        <div className="max-w-[1100px] mx-auto px-4">

          <h2 className='mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100'>More Reasons To Join</h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3">

            <div className="p-5 bg-gray-300 dark:bg-gray-800 rounded-lg">
              <h4 className='text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100'>Discover New Favorites</h4>
              <p className='text-sm text-gray-700 dark:text-gray-300'>Find movies and TV shows tailored to your taste.</p>
            </div>
            <div className="p-5 bg-gray-300 dark:bg-gray-800 rounded-lg">
              <h4 className='text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100'>Get Detailed Insights</h4>
              <p className='text-sm text-gray-700 dark:text-gray-300'>Uncover cast, crew, and reviews for your favorite shows.</p>
            </div>
            <div className="p-5 bg-gray-300 dark:bg-gray-800 rounded-lg">
              <h4 className='text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100'>Get Detailed Insights</h4>
              <p className='text-sm text-gray-700 dark:text-gray-300'>Uncover cast, crew, and reviews for your favorite shows.</p>
            </div>
            <div className="p-5 bg-gray-300 dark:bg-gray-800 rounded-lg">
              <h4 className='text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100'>Stay Up-to-Date</h4>
              <p className='text-sm text-gray-700 dark:text-gray-300'>Get notified about new releases and upcoming premieres.</p>
            </div>

          </div>

        </div>
      </section>
      {/* reasons section starts*/}
      {/* frequently asked section starts */}
      <section className="freq-asked py-12">
        <div className="max-w-[1100px] mx-auto px-4 text-white">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Frequently Asked Questions</h2>
          <div id="accordion" className="text-white">
              <Accordion content={frequentlyAskedQuestion}/>
          </div>
        </div>
      </section>
      {/* frequently asked section ends */}

      {/* footer starts */}
      <div>
        <Footer />
      </div>
      {/* footer ends */}
    </div>
  );
}

export default LandingPage;
