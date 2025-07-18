import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import { useBookmarkStore } from '../store/bookmarks';
import MovieCard from '../components/MovieCard';

function Bookmarks() {
  const [showLoader, setShowLoader] = useState(true);
  const bookmarks = useBookmarkStore((state) => state.bookmarks);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // delay for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!bookmarks.length) {
    return <div className="text-center text-gray-400 py-10">No bookmarks yet.</div>;
  }

  return (
    <div className="main-wrapper">

      <Sidebar />

      <main className="main-content">

      <div>
        {showLoader ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
              {bookmarks.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          )}
      </div>

      </main>

    </div>
  )
}

export default Bookmarks