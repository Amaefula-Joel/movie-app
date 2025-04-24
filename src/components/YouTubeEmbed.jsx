import React from "react";

const YouTubeEmbed = ({ videoKey}) => {
    if (!videoKey) return null;

    return (
        <div className="video-container">
            <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${videoKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubeEmbed;