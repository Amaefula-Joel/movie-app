import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails, getTvSeriesDetails } from "../services/api";
import Loader from "../components/Loader";
import '../styles/details.css'; // Assuming you will create this CSS file

const Details = () => {
    const { id, type } = useParams(); // Assuming type is either 'movie' or 'tv'
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

    if (loading) return <Loader />;
    if (error) return <div>Error fetching details: {error.message}</div>;

    return (
        <div className="details-container">
            <button onClick={() => navigate(-1)}>← Go Back</button>
            <div className="details-content">
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title || details.name} />
                <div className="details-info">
                    <h1>{details.title || details.name}</h1>
                    <button>Play Trailer</button>
                    <p className="mb-3"> <b>Rating:</b> {details.vote_average}</p>
                    <p className="mb-3"> <b>Release Date</b> {details.release_date || details.first_air_date}</p>
                    <p className="mb-3"> <b>Runtime:</b> {details.runtime ? `${details.runtime} mins` : 'N/A'}</p>
                    <p className="mb-3"> <b>Genres:</b> {details.genres.map(genre => genre.name).join(', ')}</p>
                    <p className="mb-3"> <b>Production Companies:</b> {details.production_companies.map(company => company.name).join(', ')}</p>
                    <p>{details.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
