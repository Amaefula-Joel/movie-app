import { Link } from 'react-router-dom';

const MovieCard = ({ id, poster_path, title, vote_average, release_date, adult, type }) => {
    return (
        // <div className="grow max-w-[500px] basis-[200px] mb-6 sm:px-3 px-2">
        <div className="grow-span-1">
            <div className="rounded-2xl rounded-br-none bg-[#e0e0e0] dark:bg-[#323232]">
                <div className="relative group">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="w-full object-cover rounded-2xl aspect-[2/3] bg-gray-400" />
                    {adult && <span className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs"> +18 </span>}
                    <Link to={`/details/${type}/${id}`} className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                        <span className=''>See Details</span>
                    </Link>
                </div>
                <div className="p-2 text-center text-black dark:text-white">
                    <h5 className='text-[16px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] mx-auto mb-2' title={title}> <Link to={`/details/${type}/${id}`} className='text-gray-900 dark:text-gray-100 hover:text-red-600 duration-200'> {title} </Link>  </h5>
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <i className="fa fa-star-o mr-2"></i>
                            <span className='text-xs'>{vote_average}</span>
                        </div>
                        <button><i className="fa fa-bookmark-o"></i></button>
                    </div>
                    <div className="flex items-center mb-2">
                        <i className="fa fa-calendar mr-2"></i>
                        <span className='text-xs'> {release_date || 'N/A'} </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
