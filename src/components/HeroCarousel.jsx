// import { useRef } from 'react';

// import { Carousel } from '@mantine/carousel';
// import { Image, Text, Box } from '@mantine/core';
// import Autoplay from 'embla-carousel-autoplay';
// import classes from './HeroCarousel.module.css';

// import CtaButton from './CtaButton'

// // import {Link} from 'react-router-dom';

// // const autoplay = useRef(Autoplay({ delay: 1000 }));

// const HeroCarousel = ({ movies = [] }) => {
//     const autoplay = useRef(Autoplay({ delay: 8000 }));

//     return (
//         <Carousel
//             withIndicators
//             height={480}
//             slideSize="100%"
//             loop
//             plugins={[autoplay.current]}
//             classNames={{
//                 // root: classes.carousel,
//                 controls: classes.carouselControls,
//                 // indicator: classes.carouselIndicator,
//             }}
//         >
//             {movies.map((movie) => (
//                 <Carousel.Slide key={movie.id}>
//                     <Box className="relative w-full h-full">
//                         <Image
//                             src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
//                             height={480}
//                             radius="md"
//                             alt={movie.title}
//                             fallbackSrc="https://via.placeholder.com/1280x320?text=No+Image"
//                             className='w-full h-full object-cover'
//                         />

//                         <Box className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-left">
//                             <Text classNames={classes.title } size="xl" weight={500}>
//                                 {movie.title}
//                             </Text>
//                             <Text classNames={{ root: classes.overview }} size="sm" mb={4}>
//                                 {movie.overview}
//                             </Text>
//                             <CtaButton linkTo={`/details/movie/${movie.id}`} text="View Details" />
//                         </Box>
//                     </Box>

//                 </Carousel.Slide>
//             ))}
//         </Carousel>

//     );
// }


// export default HeroCarousel;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import './HeroCarouselStyle.css';
import CtaButton from './CtaButton';

const HeroCarousel = ({ movies = [], type }) => {
    if (!movies.length) return null;

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                // spaceBetween={20}
                // slidesPerView={5}
                pagination={{ clickable: true }}
                // pagination
                navigation
                autoplay={{ delay: 8000, disableOnInteraction: false }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="relative w-full h-[420px]">
                            <img
                                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                alt={movie.title}
                                fallbackSrc="https://via.placeholder.com/1280x320?text=No+Image"
                                className="h-full w-full object-cover bg-top inline-block"
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