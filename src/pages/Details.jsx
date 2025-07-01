import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getRecommendations, getVideo, getCredit } from "../services/api";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YouTubeEmbed from "../components/YouTubeEmbed";

import MovieList from "../components/MovieList";

const Details = () => {
    const { id, type } = useParams(); // type is either 'movie' or 'tv'
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [recommendations, setRecommendations] = useState([]);
    const [credit, setCredit] = useState([]);
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setDetails(null);
        setTrailer(null);
        setCredit(null);
        setRecommendations([]);

        const fetchDetails = async () => {
            try {
                const data = await getDetails(id, type);
                setDetails(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchTrailer = async () => {
            try {
                const data = await getVideo(id, type);

                // get the first trailer video
                const firstTrailerMatch = data.results.find(video => video.type === 'Trailer');

                setTrailer(firstTrailerMatch);

            } catch (err) {
                console.error('there was an error getting the video')
            }
        };

        fetchDetails();
        fetchTrailer();
    }, [id, type]);

    useEffect(() => {
        if (!details) return;

        const fetchRecommendations = async () => {
            try {
                let recommendations = await getRecommendations(id, type);

                setRecommendations(recommendations.results);
            } catch (err) {
                console.error('error getting recommendations')
            }
        };

        const fetchCredit = async () => {
            try {
                let credits = await getCredit(id, type);

                setCredit(credits);
            } catch (err) {
                console.log('error fetching credits: ' + err);
            }
        };

        fetchCredit();
        fetchRecommendations();
    }, [id, type, details]);


    return (

        <div className="main-wrapper">
            <Sidebar />

            <main className="main-content">

                {loading ? (
                    <Loader />
                ) : error ? (
                    <div>
                        Error fetching details: {error.message}
                    </div>
                ) : (
                    <div className="details-container">
                        <div className="backdrop-container relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 z-[90]">
                                <Navbar />
                            </div>

                            <img
                                className="h-[480px] w-full object-cover object-[top_center]"
                                src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`}
                                alt={details.title || details.name} />

                            {/* dark overlay */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent  to-black/90"></div>
                        </div>

                        <div className="details-content relative md:-mt-[150px] -mt-[160px] z-50">
                            <div className="py-6">
                                <div className="grid md:grid-cols-[240px_1fr] grid-col-1">
                                    <div className="left flex md:justify-left justify-center items-start">
                                        <img
                                            className=" md:max-w-[220px] max-w-[120px] w-full rounded-md object-cover"
                                            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                                            alt={details.title || details.name}
                                        />
                                    </div>

                                    <div className="right md:pl-5 max-md:px-2.5">
                                        <div className="mt-4 mb-8 md:min-h-[84px]">
                                            <h1 className="mb-2 md:text-left text-center md:text-2xl text-xl font-semibold text-white max-md:dark:text-white max-md:text-black">{details.title || details.name}</h1>
                                            <h5 className="original-title md:text-left text-center italic md:text-xl text-md text-gray-200 max-md:dark:text-gray-300 max-md:text-gray-800">{details.tagline}</h5>
                                        </div>

                                        <div className="container max-w-[660px]">
                                            <div className="mb-9">
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px]">{details.overview ? details.overview : 'N/A'}</p>
                                            </div>

                                            <div className="flex gap-x-5 gap-y-3 flex-wrap mb-6 items-center">
                                                <div className="flex gap-3 items-center">
                                                    <h6 className="text-gray-700 dark:text-gray-300">Status:</h6>
                                                    <p className="font-semibold dark:text-gray-300 text-gray-600 text-sm md:text-[16px]">{details.status}</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <h6 className="text-gray-700 dark:text-gray-300"> <span className="sr-only">Rating</span> <i className="fa-regular fa-star"></i> </h6>
                                                    <p className="font-semibold dark:text-gray-300 text-gray-600 text-sm md:text-[16px]">{details.vote_average}({details.vote_count} user(s) voted)</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <h6 className="text-gray-700 dark:text-gray-300"> <span className="sr-only">Languages</span> <i className="fas fa-language"></i> </h6>
                                                    <p className="font-semibold dark:text-gray-300 text-gray-600 text-sm md:text-[16px]">{details.spoken_languages.map(lang => lang.name).join(', ')}</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <h6 className="text-gray-700 dark:text-gray-300">Runtime:</h6>
                                                    <p className="font-semibold dark:text-gray-300 text-gray-600 text-sm md:text-[16px]">{details.runtime ? `${details.runtime} mins` : 'N/A'}</p>
                                                </div>
                                            </div>

                                            <div className="mb-6">
                                                <h6 className="text-gray-700 dark:text-gray-300 mb-2">Release Date:</h6>
                                                <p className="font-semibold dark:text-gray-300 text-gray-600 text-sm md:text-[16px] ml-3">{details.release_date || details.first_air_date}</p>
                                            </div>

                                            <div className="mb-6">
                                                <h6 className="text-gray-700 dark:text-gray-300 mb-2">Production Companies:</h6>
                                                <p className="font-semibold dark:text-gray-300 text-gray-600 text-sm md:text-[16px] ml-3">{details.production_companies.map(company => company.name).join(', ')}</p>
                                            </div>

                                            <div className="mb-6">
                                                <h6 className="text-gray-700 dark:text-gray-300 mb-2">Genres:</h6>
                                                <div className="flex flex-wrap gap-1.5 ml-3">
                                                    {details.genres.map(genre => {
                                                        return (<button className="px-4 py-1.5 mr-2 rounded-md bg-pink-500 text-white border-0" key={genre.id}>{genre.name}</button>)
                                                    })}
                                                </div>
                                            </div>

                                            {/* the trailer is here */}
                                            {trailer && <YouTubeEmbed videoKey={trailer.key} />}


                                            {/* cast and crew */}
                                            {credit && Array.isArray(credit.cast) && Array.isArray(credit.crew) && (


                                                <>
                                                    <div className="mt-10">
                                                        <h3 className="text-gray-700 dark:text-gray-300 text-md mb-4 text-lg font-semibold pl-2 border-l-4 dark:border-gray-100 border-gray-900">Cast</h3>

                                                        <div className="flex overflow-x-auto space-x-4 scrollbar-hide ">
                                                            {credit.cast.map(cast => {
                                                                return (
                                                                    <div className="text-center w-[120px] flex-shrink-0" key={cast.id}>
                                                                        <img
                                                                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                                                            alt={cast.name}
                                                                            className="w-full rounded-lg min-h-[180px] object-cover bg-gray-200"
                                                                        />

                                                                        <h4 className="my-1 text-[16px] text-gray-800 dark:text-gray-300">{cast.name}</h4>
                                                                        <p className="italic text-sm text-gray-700 dark:text-gray-400">{cast.character}</p>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>

                                                    <div className="mt-10">
                                                        <h3 className="text-gray-700 dark:text-gray-300 text-md mb-4 text-lg font-semibold pl-2 border-l-4 dark:border-gray-100 border-gray-900">Staff</h3>

                                                        <div className="flex overflow-x-auto space-x-4 scrollbar-hide ">
                                                            {credit.crew.map(crew => {
                                                                return (
                                                                    <div className="text-center w-[120px] flex-shrink-0" key={crew.id}>
                                                                        <img
                                                                            src={`https://image.tmdb.org/t/p/w500${crew.profile_path}`}
                                                                            alt={crew.name}
                                                                            className="w-full rounded-lg min-h-[180px] object-cover bg-gray-200"
                                                                        />

                                                                        <h4 className="my-1 text-[16px] text-gray-800 dark:text-gray-300">{crew.name}</h4>
                                                                        <p className="italic text-sm text-gray-700 dark:text-gray-400">{crew.job}</p>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                </>
                                            )}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        {recommendations ? (
                            <div className="mt-10 mb-8 px-4">
                                <h2 className="mb-8 py-1 px-3 text-black dark:text-white text-lg font-semibold border-l-4 dark:border-gray-100 border-gray-900">Recommendations</h2>

                                <MovieList items={recommendations} type={type} arrangement="linear" />
                            </div>
                        ) : (
                            <h2 className="mb-8 py-1 px-3 text-black dark:text-white text-lg font-semibold border-l-4 dark:border-gray-100 border-gray-900"> No Recommendations</h2>
                        )
                        }

                        <Footer />
                    </div>
                )}

            </main>
        </div>
    );
};

export default Details;
