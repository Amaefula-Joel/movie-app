import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
// import './HeroCarouselStyle.css';
import CtaButton from './CtaButton';

const HeroCarousel = ({ movies = [], type }) => {
    if (!movies.length) return null;

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Autoplay]}
                // spaceBetween={20}
                // slidesPerView={5}
                // pagination
                navigation
                autoplay={{ delay: 8000, disableOnInteraction: false }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="relative w-full h-[500px]">
                            <img
                                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                alt={movie.title}
                                fallbackSrc="https://via.placeholder.com/1280x320?text=No+Image"
                                className="h-full w-full object-cover object-top inline-block"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent md:text-left text-center">
                                <div className="max-w-xl px-1">
                                    <h2 className="text-3xl font-bold text-white drop-shadow mb-2">
                                        {movie.title}
                                    </h2>
                                    <p className="text-gray-200 md:text-base text-sm mb-4 line-clamp-3 drop-shadow">
                                        {movie.overview}
                                    </p>
                                    <CtaButton
                                        linkTo={`/details/movie/${movie.id}`}
                                        text="See More"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroCarousel;