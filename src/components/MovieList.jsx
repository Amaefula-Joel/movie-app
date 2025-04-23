import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ items, type, arrangement = "linear" }) => {

    const [movieArrangment, setMovieArrangment] = useState('');

    useEffect(() => {
        if (arrangement === 'linear') {
            setMovieArrangment('grid grid-cols-[repeat(20,_140px)] gap-4 overflow-x-auto scroll scrollbar-hide')
        } else {
            setMovieArrangment('grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4')

        }
    }, [arrangement]);

    return (
        // <div className="flex flex-wrap movie-list">

        <>
            <div className={movieArrangment}>
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
        </>
    );
}

export default MovieList;
