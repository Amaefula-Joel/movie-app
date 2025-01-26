import '../styles/movieComp.css';

const MovieCard = ({ id, poster_path, title, vote_average, release_date }) => {
    return (
        <div className="movie-col mb-4 px-sm-3 px-2">
            <div className="movie-card ">
                <div className="poster-con">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="img-fluid w-100" />
                </div>
                <div className="p-2 text-center">
                    <h5 className='movie-title mb-2'> {title} </h5>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <i className="fa fa-star mr-2"></i>
                            <span>{vote_average}</span>
                        </div>
                        <button><i className="fa fa-bookmark"></i></button>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <i className="fa fa-calendar mr-2"></i>
                        <span> {release_date || 'N/A'} </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
