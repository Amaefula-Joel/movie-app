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

  const { data, loading, error } = UseFetch(getTrendingMovies);

  return (
    <div className="mx-auto max-w-[1500px] dark:bg-[#151515] bg-gray-100">
      <div className="min-h-screen max-h-full flex relative">
        <div className="absolute inset-0 bg-cover" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.69) 20%, rgba(0, 0, 0, 0.96)), url('/hero-image.jpg')` }}></div>
        <div className='flex-col flex relative w-full'>
          {/* navbar starts */}
          <Navbar />
          {/* navbar ends */}

          {/* Hero content starts */}
          <div className="flex justify-center items-center grow relative">
            {/* Animated background shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-500 opacity-30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
            </div>
            <div className="content text-gray-100 py-16 px-6 max-w-[600px] z-10">
              <div className='text-center'>
                <h1 className='mb-5 sm:text-6xl text-4xl font-extrabold leading-tight drop-shadow-lg'>
                  Discover <span className="text-pink-400">Unlimited</span> Movies, TV Shows, and More
                </h1>
                <p className='mb-8 text-lg text-gray-200'>
                  Experience the ultimate entertainment destination with a vast library of movies, TV shows, and original content.
                  <span className="block mt-2 text-pink-300 font-semibold">Start your journey to endless entertainment today!</span>
                </p>
                <CtaButton text="Explore Movies" className="shadow-lg hover:scale-105 transition-transform duration-200" />

                {/* Add a row of featured movie covers */}
                {/* <div className="flex justify-center gap-3 mt-10">
                  <img src="/covers/cover1.jpg" alt="Featured 1" className="w-16 h-24 object-cover rounded-lg shadow-md border-2 border-gray-800" />
                  <img src="/covers/cover2.jpg" alt="Featured 2" className="w-16 h-24 object-cover rounded-lg shadow-md border-2 border-gray-800" />
                  <img src="/covers/cover3.jpg" alt="Featured 3" className="w-16 h-24 object-cover rounded-lg shadow-md border-2 border-gray-800" />
                  <img src="/covers/cover4.jpg" alt="Featured 4" className="w-16 h-24 object-cover rounded-lg shadow-md border-2 border-gray-800" />
                </div> */}

              </div>
            </div>
          </div>
          {/* Hero content ends */}


        </div >
      </div>
      {/* trending movies section starts */}
      <section className='py-12'>
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md'>
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Trending Now
              </span>
            </h2>
            <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
          </div>
          {/* You can use a similar gradient and animated dot style for the other section headings */}
          <div>
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
                <MovieList items={data.results} type="movie" arrangement="linear" />
              </>
            )}
          </div>
        </div>
      </section>
      {/* trending movies section ends */}
      {/* reasons section starts */}
      <section className="reasons py-16 bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-[#18181c] dark:via-[#151515] dark:to-[#18181c]">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="mb-10 sm:text-3xl text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg">
            More Reasons To Join
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-9">
            <div className="relative group p-7 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h4 className="mt-8 text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 text-center">Discover New Favorites</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">Find movies and TV shows tailored to your taste.</p>
            </div>
            <div className="relative group p-7 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 12H9m12 0A9 9 0 11 3 12a9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mt-8 text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 text-center">Get Detailed Insights</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">Uncover cast, crew, and reviews for your favorite shows.</p>
            </div>
            <div className="relative group p-7 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h4 className="mt-8 text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 text-center">Stay Up-to-Date</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">Get notified about new releases and upcoming premieres.</p>
            </div>
            <div className="relative group p-7 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-400 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h4 className="mt-8 text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 text-center">Join a Thriving Community</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">Connect with fellow movie lovers and share your favorites.</p>
            </div>
          </div>
        </div>
      </section>
      {/* reasons section ends */}
      <section className="freq-asked py-12">
        <div className="max-w-[1100px] mx-auto px-4 text-white">
          <h2 className="mb-8 sm:text-3xl text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg">
            Frequently Asked Questions
          </h2>
          <div id="accordion" className="text-white">
            <Accordion content={frequentlyAskedQuestion} />
          </div>
        </div>
      </section>
      {/* frequently asked section ends */}

      {/* footer starts */}
      <div>
        <Footer />
      </div>
      {/* footer ends */}
    </div >
  );
}

export default LandingPage;
