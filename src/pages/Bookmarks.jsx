import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";

function Bookmarks() {
  const [showLoader, setShowLoader] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // delay for 2 seconds

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="main-wrapper">

      <Sidebar />

      <main className="main-content">

      <div>
        {showLoader ? (
            <Loader />
          ) : (
            <div>
              
            </div>
          )}
      </div>

      </main>

    </div>
  )
}

export default Bookmarks