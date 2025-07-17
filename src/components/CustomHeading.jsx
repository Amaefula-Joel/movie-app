
const CustomHeading = ({ title }) => {
    return (
        <div className="flex items-center gap-4 mb-6">
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md'>
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {title}
                </span>
            </h2>
            <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
        </div>
    );
};

export default CustomHeading;