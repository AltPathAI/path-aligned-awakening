
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import YouTubeEmbed from './YouTubeEmbed';

interface VideoCardGridProps {
  videos: string[];
}

const VideoCardGrid: React.FC<VideoCardGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {videos.map((videoId, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-teal-100">
          <CardContent className="p-6">
            <YouTubeEmbed videoId={videoId} className="mb-4" />
            <h3 className="text-lg font-semibold text-teal-900 mb-2">
              Coaching Session {index + 1}
            </h3>
            <p className="text-teal-700">
              Watch how values-aligned coaching helps real people discover their authentic path.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideoCardGrid;
