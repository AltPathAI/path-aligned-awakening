
import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, className = '' }) => {
  return (
    <div className={`aspect-video ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
