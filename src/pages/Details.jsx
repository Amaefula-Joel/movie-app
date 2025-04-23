import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails, getTvSeriesDetails, getSimilarMovies, getSimilarTvSeries } from "../services/api";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import MovieList from "../components/MovieList";

const Details = () => {
    const { id, type } = useParams(); // Assuming type is either 'movie' or 'tv'
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [similarItems, setSimilarItems] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = type === 'movie' ? await getMovieDetails(id) : await getTvSeriesDetails(id);
                setDetails(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id, type]);

    const fetchSimilarItems = async () => {
        if (details) {
            let similarData;
            if (type === "movie") {
                similarData = await getSimilarMovies(details.id);
            } else {
                similarData = await getSimilarTvSeries(details.id);
            }
            setSimilarItems(similarData.results); // Get the first 7 similar items
        }
    };

    fetchSimilarItems();

    // if (loading) return <Loader />;
    // if (error) return <div>Error fetching details: {error.message}</div>;

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
                            <div className="absolute top-0 left-0 right-0">
                                <Navbar />
                            </div>

                            <img
                                className="md:h-[480px] h-[320px] w-full object-cover object-[top_center]"
                                src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`}
                                alt={details.title || details.name} />

                            {/* dark overlay */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent  to-black/90"></div>
                        </div>

                        <div className="details-content relative md:-mt-[150px] -mt-[200px] z-50">
                            <div className="py-6">
                                <div className="grid md:grid-cols-[240px_1fr] grid-col-1">
                                    <div className="left flex md:justify-left justify-center items-start">
                                        <img
                                            className=" md:max-w-[220px] max-w-[120px] w-full rounded-md object-cover"
                                            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                                            alt={details.title || details.name}
                                        />
                                    </div>

                                    <div className="right md:pl-5">
                                        <div className="mt-4 mb-12">
                                            <h1 className="mb-2 md:text-left text-center md:text-2xl text-xl font-semibold text-white max-md:dark:text-white max-md:text-black">{details.title || details.name}</h1>
                                            <h5 className="original-title md:text-left text-center italic md:text-xl text-md text-gray-200 max-md:dark:text-gray-300 max-md:text-gray-800">{details.tagline}</h5>
                                        </div>

                                        <div className="details-info-container max-w-[600px]">
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Summary:</h6>
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px] shrink">{details.overview ? details.overview : 'N/A'}</p>
                                            </div>
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Status:</h6>
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px] shrink">{details.status}</p>
                                            </div>
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Rating:</h6>
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px] shrink">{details.vote_average}({details.vote_count} user(s) voted)</p>
                                            </div>
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Languages :</h6>
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px] shrink">{details.spoken_languages.map(lang => lang.name).join(', ')}</p>
                                            </div>
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Release Date:</h6>
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px] shrink">{details.release_date || details.first_air_date}</p>
                                            </div>
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Runtime:</h6>
                                                <p className="dark:text-gray-300 text-gray-600 text-sm md:text-[16px] shrink">{details.runtime ? `${details.runtime} mins` : 'N/A'}</p>
                                            </div>
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Production Companies:</h6>
                                                <p className="dark:text-gray-300 text-gray-600 text- md:text-md shrink">{details.production_companies.map(company => company.name).join(', ')}</p>
                                            </div>
                                            <div className="details-info flex gap-4 mb-3">
                                                <h6 className="mr-3 font-semibold text-gray-700 dark:text-gray-300 w-[130px] shrink-0">Genres:</h6>
                                                <div className="shrink">
                                                    {details.genres.map(genre => {
                                                        return (<button className="px-4 py-2 mr-2 rounded-md bg-pink-500 text-white border-0" key={genre.id}>{genre.name}</button>)
                                                    })}
                                                </div>
                                            </div>

                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 mb-8 px-4">
                            <MovieList items={similarItems} type={type} />
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

export default Details;
