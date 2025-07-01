// import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
// import useFetch from '../hooks/UseFetch';
import { getSearchedMovie } from '../services/api';

import { useTheme } from '../context/ThemeContext';

import { Navbar } from "flowbite-react";

import { debounce } from 'lodash'; // fpr debouncing that is delaying the search function by some time

export function NavbarComponent() {

    const { theme, setTheme } = useTheme();

    const [query, setQuery] = useState('');
    const [type, setType] = useState('movie');
    const [isSearching, setIsSearching] = useState(true); // loading state
    const [hasSearched, setHasSearched] = useState(false); // if the user has inputted something in the search
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);

    const customTheme = {
        root: {
            base: "bg-black/50 px-2 py-2.5 dark:border-gray-700 sm:px-4",
            rounded: {
                on: "rounded",
                off: ""
            },
            bordered: {
                on: "border",
                off: ""
            },
            inner: {
                base: "mx-auto flex flex-wrap items-center justify-between md:space-x-6",
                fluid: {
                    on: "",
                    off: "container"
                }
            }
        },
        brand: {
            base: "flex items-center"
        },
        collapse: {
            base: "w-full md:block md:w-auto grow",
            list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
            hidden: {
                on: "hidden",
                off: ""
            }
        },
        link: {
            base: "block py-2 pl-3 pr-4 md:p-0",
            active: {
                on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            },
            disabled: {
                "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                "off": ""
            }
        },
        toggle: {
            base: "inline-flex items-center p-2 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600 md:hidden",
            icon: "h-5 w-5 shrink-0"
        }
    };

    const handleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleTypeChange = (e) => {
        setType(e.target.value === 'movie' ? 'movie' : 'tv');
    };
    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const debouncedSearch = useCallback(
        debounce(async (query, type) => {
            if (query.trim() === "") {
                setResults([]);
                setIsSearching(false);
                setHasSearched(false);
                return;
            }

            setError(false);
            setIsSearching(true);
            setHasSearched(true);
            try {
                const data = await getSearchedMovie(query, type);
                setResults(data?.results || []);
            } catch (error) {
                console.error("Search error:", error);
                setError(true);
                setResults([]);
            } finally {
                setIsSearching(false);
            }
        }, 500), // 500ms delay
        []
    );
    useEffect(() => {
        debouncedSearch(query, type);
        return () => debouncedSearch.cancel();
    }, [query, type, debouncedSearch]);

    return (
        <div className="relative z-[90] w-full">
            <Navbar fluid theme={customTheme}>
                <Navbar.Brand href="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9 text-gray-200" alt="Movieflix Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">MovieFlix</span>
                </Navbar.Brand>
                <div className="flex items-center md:order-3">
                    <Navbar.Toggle />

                    <button onClick={handleTheme} className="py-1 px-2 text-white sm:text-2xl text-lg">
                        {theme === 'dark' ? (
                            <i className="fa-solid fa-moon" aria-hidden="true"></i>
                        ) : (
                            <i className="fa-solid fa-sun" aria-hidden="true"></i>
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </button>
                </div>
                <Navbar.Collapse className="">
                    <div className="w-full relative">
                        <div className="flex flex-col md:flex-row items-stretch w-full md:h-11  md:rounded-lg">
                            <select
                                name="search-option"
                                value={type}
                                onChange={handleTypeChange}
                                className="grow-0 text-sm bg-black text-gray-200 px-2 py-1.5 max-md:mb-3 md:rounded-l-lg border-2 border-gray-700 duration-150 focus-visible:border-pink-600 focus-visible:outline-none">
                                <option value="movie">Movie</option>
                                <option value="tv">Tv Series</option>
                            </select>

                            <div className="flex md:grow">
                                <input
                                    type="search"
                                    value={query}
                                    onChange={handleQueryChange}
                                    placeholder="Search for your movie or show"
                                    aria-label="Movie search"
                                    className="grow text-sm bg-black text-gray-200 placeholder-gray-500  w-full md:max-w-[500px] font-normal px-2 py-2.5 border-2 border-gray-700 duration-150 focus-visible:border-pink-600 focus-visible:outline-none" />
                            </div>

                        </div>

                        {/* search result */}
                        {hasSearched && (
                            <div className="absolute top-full left-0 w-full bg-black py-4 px-5 border-2 border-gray-700">

                                {isSearching ? (
                                    <div className=" text-gray-200 text-center text-sm ">Loading</div>
                                ): error ? (
                                    <div className=" text-gray-200 text-center text-sm ">Error fetching result</div>
                                ) : !isSearching && results.length === 0 ? (
                                    <div className=" text-gray-200 text-center text-sm ">No results found</div>
                                ) : results.length > 0 && (
                                    <div className="search-results flex flex-col gap-4 max-h-[400px] overflow-y-auto">
                                        {results.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-start gap-3">
                                                <a
                                                href={`/details/${type}/${item.id}`} >
                                                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} className="h-[40px] w-[40px] rounded-full" />
                                                </a>

                                                <div className="">
                                                    <h4 className="text-gray-100 text-sm font-semibold mb-1">
                                                        <a 
                                                            href={`/details/${type}/${item.id}`} 
                                                            className="hover:text-red-500 duration-150"> 
                                                            {item.title || item.name} 
                                                        </a> 
                                                    </h4>
                                                    
                                                    <p className="text-gray-400 text-xs">{new Date(item.release_date || item.first_air_date).getFullYear()}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {//!error &&z results.length > 0 && (
                                    // <div></div>
                                    // <div className="search-results flex flex-col gap-4 max-h-[400px] overflow-y-auto">
                                    //     {results.map((item) => (
                                    //         <div
                                    //             key={item.id}
                                    //             className="flex items-start gap-3">
                                    //             <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} className="h-[40px] w-[40px] rounded-full" />

                                    //             <div className="">
                                    //                 <h4 className="text-gray-100 text-sm font-semibold mb-1">{item.title || item.name}</h4>
                                    //                 <div className="flex items-center gap-2 mb-1">
                                    //                     <p className="text-gray-300 text-xs">TV</p>

                                    //                     {/* <span className="text-gray-200">-</span>

                                    //                     <p className="text-gray-400 text-xs">{item.runtime ? `${item.runtime} mins` : 'N/A'}</p> */}
                                    //                 </div>
                                    //                 <p className="text-gray-400 text-xs">{item.release_date || item.first_air_date}</p>
                                    //             </div>
                                    //         </div>
                                    //     ))}
                                    // </div>
                                    //)
                                }
                            </div>
                        )}
                    </div>

                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}


export default NavbarComponent;