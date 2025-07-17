import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import MovieCard from './MovieCard';

import './MovieListCarouselStyle.css'; 

const MoviesListCarousel = ({ movies = [], type }) => {
    if (!movies.length) return null;

    return (
        <div className="w-full py-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            title={movie.title || movie.name} // Use title for movies and name for TV series
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}
                            release_date={movie.release_date || movie.first_air_date} // Use release_date for movies and first_air_date for TV series
                            adult={movie.adult} // Pass the adult prop if available
                            type={type}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MoviesListCarousel;