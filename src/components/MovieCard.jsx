import { Link } from 'react-router-dom';

const MovieCard = ({ id, poster_path, title, vote_average, release_date, adult, type }) => {
    return (
        <div className="grow-span-1">
            <div className="rounded-2xl rounded-br-none">
                <div className="relative group">
                    {/* Movie Poster */}
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="w-full object-cover  aspect-[2/3] bg-gray-400" />
                    {adult && <span className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs"> +18 </span>}

                    {/* See Details Link */}
                    <Link to={`/details/${type}/${id}`} className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                        <span className=''>See Details</span>
                    </Link>

                    {/* rating in the top left*/}
                    <div
                        className={`
                            absolute top-3 left-3
                            flex items-center justify-center
                            w-8 h-8 rounded-full text-white font-bold text-xs
                            ${vote_average >= 7.5
                                ? 'bg-green-500'
                                : vote_average >= 5
                                ? 'bg-orange-400'
                                : 'bg-red-500'}
                        `}
                        title={`Rating: ${vote_average}`}
                    >
                        {vote_average.toFixed(1)}
                    </div>

                    {/* bookmark button in top right */}
                    <button
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-red-500 transition-colors duration-200 text-gray-900 dark:text-gray-100 hover:text-white shadow"
                        title="Bookmark"
                    >
                        <i className="fa fa-bookmark-o"></i>
                    </button>
                </div>
                <div className="pt-3 text-black dark:text-white">
                    <div className="flex justify-between items-center mb-2 gap-4">
                        <div>
                            <h5 className='text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[130px] mb-3' title={title}> 
                                <Link to={`/details/${type}/${id}`} className='text-gray-900 dark:text-gray-100 hover:text-red-600 duration-200'> {title} </Link>  
                            </h5>
                            <p className='text-xs font-sembold'> {release_date || 'N/A'} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
