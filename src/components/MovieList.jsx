import MovieCard from "./MovieCard";
import '../styles/movieComp.css';

const MovieList = ({ items }) => {
    return (
        <div className="d-flex flex-wrap movie-list">
            {items.map((item) => (
                <MovieCard 
                    key={item.id}
                    id={item.id}
                    title={item.title || item.name} // Use title for movies and name for TV series
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    release_date={item.release_date || item.first_air_date} // Use release_date for movies and first_air_date for TV series
                />
            ))}
        </div>
    );
}

export default MovieList;
