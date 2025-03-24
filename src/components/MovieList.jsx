import MovieCard from "./MovieCard";
import '../styles/movieComp.css';

const MovieList = ({ items, type }) => {
    return (
        // <div className="flex flex-wrap movie-list">
        <div className="grid grid-cols-[repeat(20,_140px)] gap-4 overflow-x-auto scroll scrollbar-hide">
            {items.map((item) => (
                <MovieCard 
                    key={item.id}
                    id={item.id}
                    title={item.title || item.name} // Use title for movies and name for TV series
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    release_date={item.release_date || item.first_air_date} // Use release_date for movies and first_air_date for TV series
                    adult={item.adult} // Pass the adult prop if available
                    type={type} // Pass the type prop
                />
            ))}
        </div>
    );
}

export default MovieList;
