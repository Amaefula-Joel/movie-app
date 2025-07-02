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

                // Find the first working YouTube trailer
                let trailerVideo =
                    data.results.find(
                        video =>
                            video.type === "Trailer" &&
                            video.site === "YouTube" &&
                            video.key
                    ) ||
                    data.results.find(
                        video =>
                            video.site === "YouTube" &&
                            video.key
                    );

                setTrailer(trailerVideo);
            } catch (err) {
                console.error('there was an error getting the video');
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
                                <div className="grid md:grid-cols-[240px_1fr] grid-cols-1">
                                    <div className="left flex md:justify-left justify-center items-start">
                                        <img
                                            className=" md:max-w-[220px] max-w-[120px] w-full rounded-md object-cover"
                                            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                                            alt={details.title || details.name}
                                        />
                                    </div>

                                    <div className="right md:pl-5 max-md:px-2.5">
                                        <div className="mt-4 mb-8 md:min-h-[84px]">
                                            {/* Title */}
                                            <h1 className="mb-2 md:text-left text-center md:text-3xl text-2xl font-semibold text-white max-md:dark:text-white max-md:text-black">{details.title || details.name}</h1>

                                            {/* Tagline */}
                                            <h5 className="original-title md:text-left text-center italic md:text-xl text-md text-gray-200 max-md:dark:text-gray-300 max-md:text-gray-800">"{details.tagline}"</h5>
                                        </div>

                                        <div className="container max-w-[660px]">
                                            <div className="mb-9">
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px]">{details.overview ? details.overview : 'N/A'}</p>
                                            </div>

                                            {/* Details section */}
                                            <div>

                                                {/* Status */}
                                                <div className="flex gap-4 mb-3 items-center">
                                                    <h6 className="font-semibold text-gray-700 dark:text-gray-300 text-base b italic">
                                                        <span className="fa fa-circle-info mr-2"></span>
                                                        Status:
                                                    </h6>
                                                    <p className="dark:text-gray-300 text-gray-600 text-sm">{details.status}</p>
                                                </div>
                                                {/* Production Companies */}
                                                <div className="flex gap-4 mb-3 items-center">
                                                    <h6 className="font-semibold text-gray-700 dark:text-gray-300 text-base b italic">
                                                        <span className="fa fa-star mr-2"></span>
                                                        Rating:
                                                    </h6>
                                                    <p className="dark:text-gray-300 text-gray-600 text-sm">{details.vote_average}</p>
                                                </div>
                                                {/* Runtime */}
                                                <div className="flex gap-4 mb-3 items-center">
                                                    <h6 className="font-semibold text-gray-700 dark:text-gray-300 text-base b italic">
                                                        <span className="fa fa-clock mr-2"></span>
                                                        Runtime:
                                                    </h6>
                                                    <p className="dark:text-gray-300 text-gray-600 text-sm">{details.runtime} minutes</p>
                                                </div>
                                                {/* Release Date */}
                                                <div className="flex gap-4 mb-3 items-center">
                                                    <h6 className="font-semibold text-gray-700 dark:text-gray-300 text-base b italic">
                                                        <span className="fa fa-calendar-days mr-2"></span>
                                                        Release Date:
                                                    </h6>
                                                    <p className="dark:text-gray-300 text-gray-600 text-sm">{details.release_date}</p>
                                                </div>
                                                {/* languages */}
                                                <div className="flex gap-4 mb-3 items-center">
                                                    <h6 className="font-semibold text-gray-700 dark:text-gray-300 text-base b italic">
                                                        <span className="fa fa-language mr-2"></span>
                                                        Languages:
                                                    </h6>
                                                    <p className="dark:text-gray-300 text-gray-600 text-sm">{details.spoken_languages.map(lang => lang.name).join(', ')}</p>
                                                </div>
                                            </div>

                                            {/* Production Companies */}
                                            <div className="mb-6">
                                                <h6 className="font-semibold text-gray-700 dark:text-gray-300 text-base b italic flex items-center mb-3">
                                                    <span className="fa fa-globe mr-2"></span>
                                                    Production Companies:
                                                </h6>
                                                <div className="flex flex-wrap gap-4">
                                                    {details.production_companies.map(company => (
                                                        <div
                                                            key={company.id}
                                                            className="flex flex-col items-center w-[100px]"
                                                        >
                                                            {company.logo_path ? (
                                                                <div className="w-full aspect-[2/1] flex items-center justify-center bg-gray-300  rounded-md shadow">
                                                                    <img
                                                                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                                                        alt={company.name}
                                                                        className="object-contain w-full h-full"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className="w-full aspect-[2/1] flex items-center justify-center text-xs text-gray-600 bg-gray-300 rounded-md shadow">
                                                                    No Logo
                                                                </div>
                                                            )}
                                                            <span className="mt-2 text-xs text-center text-gray-700 dark:text-gray-300">{company.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mb-10">
                                                <h6 className="mb-2 font-semibold text-gray-700 dark:text-gray-300 text-base italic">
                                                    Genre:
                                                </h6>
                                                <div className="flex flex-wrap gap-2">
                                                    {details.genres.map(genre => {
                                                        return (<button className="px-4 py-1.5 mr-2 rounded-md bg-pink-500 text-white border-0" key={genre.id}>{genre.name}</button>)
                                                    })}
                                                </div>
                                            </div>

                                            {/* the trailer is here */}

                                            {/* Trailer Heading */}
                                            <div className="flex items-center gap-3 py-10">
                                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md m-0">
                                                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                                        Trailer
                                                    </span>
                                                </h3>
                                                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                                            </div>

                                            {/* Trailer Video or No Trailer */}
                                            {trailer ? (
                                                <YouTubeEmbed videoKey={trailer.key} />
                                            ) : (
                                                <div className="mb-8 px-4">
                                                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 italic">
                                                        No Trailer Available
                                                    </h4>
                                                </div>
                                            )}

                                            {/* Cast and Crew */}
                                            {credit && (
                                                <>
                                                    {/* Cast */}
                                                    {Array.isArray(credit.cast) && credit.cast.length > 0 && (
                                                        <div className="mt-16">
                                                            <div className="flex items-center gap-3 mb-8 mt-10">
                                                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md m-0">
                                                                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                                                        Cast
                                                                    </span>
                                                                </h3>
                                                                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                                                            </div>
                                                            <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-2">
                                                                {credit.cast.map((cast, idx) => (
                                                                    <div
                                                                        className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow-md p-3 min-w-[140px] max-w-[140px] transition-transform hover:-translate-y-2 hover:shadow-xl"
                                                                        key={`${cast.id}-${idx}`}
                                                                    >
                                                                        {cast.profile_path ? (
                                                                            <img
                                                                                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                                                                alt={cast.name}
                                                                                className="w-[90px] h-[120px] rounded-md object-cover bg-gray-200 mb-2 border-2 border-pink-400"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-[90px] h-[120px] flex items-center justify-center rounded-md bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 mb-2 border-2 border-pink-400 text-gray-500 text-xs font-semibold">
                                                                                No Image
                                                                            </div>
                                                                        )}
                                                                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-center text-sm truncate w-full">{cast.name}</h4>
                                                                        <p className="italic text-xs text-gray-600 dark:text-gray-400 text-center truncate w-full">{cast.character}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Staff/Crew */}
                                                    {Array.isArray(credit.crew) && credit.crew.length > 0 && (
                                                        <div className="mt-16">
                                                            <div className="flex items-center gap-3 mb-8 mt-10">
                                                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md m-0">
                                                                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                                                        Staff
                                                                    </span>
                                                                </h3>
                                                                <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                                                            </div>
                                                            <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-2">
                                                                {credit.crew.map((crew, idx) => (
                                                                    <div
                                                                        className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow-md p-3 min-w-[140px] max-w-[140px] transition-transform hover:-translate-y-2 hover:shadow-xl"
                                                                        key={`${crew.id}-${idx}`}
                                                                    >
                                                                        {crew.profile_path ? (
                                                                            <img
                                                                                src={`https://image.tmdb.org/t/p/w500${crew.profile_path}`}
                                                                                alt={crew.name}
                                                                                className="w-[90px] h-[120px] rounded-md object-cover bg-gray-200 mb-2 border-2 border-blue-400"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-[90px] h-[120px] flex items-center justify-center rounded-md bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 mb-2 border-2 border-blue-400 text-gray-500 text-xs font-semibold">
                                                                                No Image
                                                                            </div>
                                                                        )}
                                                                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-center text-sm truncate w-full">{crew.name}</h4>
                                                                        <p className="italic text-xs text-gray-600 dark:text-gray-400 text-center truncate w-full">{crew.job}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {Array.isArray(recommendations) && recommendations.length > 0 ? (
                            <div className="mt-10 mb-8 px-4">
                                <div className="flex items-center gap-3 mb-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md m-0">
                                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                            Recommendations
                                        </span>
                                    </h2>
                                    <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                                </div>
                                <MovieList items={recommendations} type={type} arrangement="linear" />
                            </div>
                        ) : (
                            <div className="mt-10 mb-8 px-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md m-0">
                                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                        No Recommendations
                                    </span>
                                </h2>
                            </div>
                        )}

                        <Footer />
                    </div>
                )}

            </main>
        </div>
    );
};

export default Details;
