import React from "react";
import Navbar from "./Navbar";

const HeroHeader = ({ heading, subtitle, movie }) => {
    const bgImage = movie?.backdrop_path
        ? `linear-gradient(to bottom, rgba(0,0,0,0.13) 20%, rgba(0,0,0,0.66)), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}) top center / cover no-repeat`
        : "#111";

    return (
        <div className="bg-dark">
            <div
                className="app-header"
                style={{ background: bgImage }}
            >
                <Navbar />
                <div className="text-center px-4 flex justify-center items-center min-h-[500px]">
                    <div className="mx-auto max-w-[700px] bg-black/60 rounded-lg p-6">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
                            <span className="text-red-600">{heading}</span>
                        </h1>
                        <p className="text-lg text-gray-200 mb-6">{subtitle}</p>
                        {movie && (
                            <div className="flex flex-col items-center gap-4">
                                <h2 className="text-2xl font-semibold text-pink-400">
                                    {movie.title || movie.name}
                                </h2>
                                <button
                                    className="mt-2 px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
                                    onClick={() => window.location.href = `/details/movie/${movie.id}`}
                                >
                                    See More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHeader;