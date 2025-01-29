import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails, getTvSeriesDetails, getSimilarMovies, getSimilarTvSeries } from "../services/api";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import '../styles/details.css'; // Assuming you will create this CSS file

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
            setSimilarItems(similarData.results.slice(0, 10)); // Get the first 7 similar items
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
                        <div className="backdrop-container">
                            <img src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`} alt={details.title || details.name} />
                            <div className="overlay"></div>
                        </div>

                        <div className="details-content">
                            <div className="container-fluid py-3">
                                <div className="details-layout">
                                    <div className="left mb-4 mb-md-0 text-center text-md-left">
                                        <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title || details.name} className="poster-img" />
                                    </div>
                                    <div className="right">
                                        <h1 className="font-italic mb-2 text-center text-md-left">{details.title || details.name}</h1>
                                        <h5 className="original-title mb-5 text-center text-md-left">{details.original_title}</h5>

                                        <div className="details-info-container">
                                            <div className="details-info d-flex mb-2">
                                                <h6 className="mr-3">Summary:</h6>
                                                <p className="light">{details.overview}</p>
                                            </div>
                                            <div className="details-info d-flex mb-2">
                                                <h6 className="mr-3">Rating:</h6>
                                                <p className="light">{details.vote_average}</p>
                                            </div>
                                            <div className="details-info d-flex mb-2">
                                                <h6 className="mr-3">Languages :</h6>
                                                <p className="light">{details.spoken_languages.map(lang => lang.name).join(', ')}</p>
                                            </div>
                                            <div className="details-info d-flex mb-2">
                                                <h6 className="mr-3">Release Date:</h6>
                                                <p className="light">{details.release_date || details.first_air_date}</p>
                                            </div>
                                            <div className="details-info d-flex mb-2">
                                                <h6 className="mr-3">Runtime:</h6>
                                                <p className="light">{details.runtime ? `${details.runtime} mins` : 'N/A'}</p>
                                            </div>
                                            <div className="details-info d-flex mb-2">
                                                <h6 className="mr-3">Production Companies:</h6>
                                                <p className="light">{details.production_companies.map(company => company.name).join(', ')}</p>
                                            </div>
                                            <div className="details-info d-flex mb-2">
                                                <h6 className="mr-3">Genres:</h6>
                                                <div>
                                                    {details.genres.map(genre => {
                                                        return (<button className="btn btn-outline-danger mr-2">{genre.name}</button>)
                                                    })}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                        <MovieList items={similarItems} type={type}/>
                        </div>
                    </div>
                )}

            </main>
        </div>
        // <div className="details-container">
        //     <button onClick={() => navigate(-1)}>← Go Back</button>
        //     <div className="details-content">
        //         <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title || details.name} />
        //         <div className="details-info">
        //             <h1>{details.title || details.name}</h1>
        //             <button>Play Trailer</button>
        //             <p className="mb-3"> <b>Rating:</b> {details.vote_average}</p>
        //             <p className="mb-3"> <b>Release Date</b> {details.release_date || details.first_air_date}</p>
        //             <p className="mb-3"> <b>Runtime:</b> {details.runtime ? `${details.runtime} mins` : 'N/A'}</p>
        //             <p className="mb-3"> <b>Genres:</b> {details.genres.map(genre => genre.name).join(', ')}</p>
        //             <p className="mb-3"> <b>Production Companies:</b> {details.production_companies.map(company => company.name).join(', ')}</p>
        //             <p>{details.overview}</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Details;
