import { Link } from "react-router-dom";

import { useTheme } from '../context/ThemeContext';

import { Navbar } from "flowbite-react";

export function NavbarComponent() {

    const { theme, setTheme } = useTheme();

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
    }

    const handleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <Navbar fluid theme={customTheme} className="relative z-40">
            <Navbar.Brand as={Link} href="">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Movieflix Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">MovieFlix</span>
            </Navbar.Brand>
            <div className="flex items-center md:order-3">
                <Navbar.Toggle />

                <button onClick={handleTheme} className="py-1 px-2 text-white sm:text-2xl text-lg">
                    {theme === 'dark' ? (
                        <i class="fa-solid fa-moon" aria-hidden="true"></i>
                    ) : (
                        <i class="fa-solid fa-sun" aria-hidden="true"></i>
                    )}
                    <span className="sr-only">Toggle theme</span>
                </button>
            </div>
            <Navbar.Collapse>
                <form className="w-full">
                    <div className="flex flex-col md:flex-row items-stretch w-full md:h-11  md:rounded-lg">
                        <select name="search-option" className="grow-0 bg-gray-700 text-gray-200 px-2 py-1.5 max-md:mb-3 md:border-r-2 border-gray-400 focus:outline-none md:rounded-l-lg">
                            <option value="movie">Movie</option>
                            <option value="tv-series">Tv Series</option>
                        </select>

                        <div className="flex md:grow">
                            <input type="search" placeholder="Search for your movie or show" className="grow bg-gray-700 text-gray-200 w-full md:max-w-[500px] font-normal border-r-2 border-gray-400 px-2 py-1.5 focus:outline-none" />

                            <button className="grow-0 py-1 px-2 bg-gray-700 text-gray-200 text-[17px] md:rounded-r-lg">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                    </div>
                </form>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavbarComponent;