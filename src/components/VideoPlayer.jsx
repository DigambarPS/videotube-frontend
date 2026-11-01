import React, { useRef } from 'react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

// Import Vidstack default player styles
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { useAddWatchHistory } from '../hooks/useWatchHistory';
import { useParams } from 'react-router-dom';

export const VideoPlayer = ({ src }) => {
  const { mutate: addVideoToWatchHistory } = useAddWatchHistory();
  const hasRecordedView = useRef(false);
  const {videoId} = useParams();
  const handlePlay = () => {
    if (!hasRecordedView.current && videoId) {
      hasRecordedView.current = true;
      addVideoToWatchHistory(videoId);
    }
  };

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
      <MediaPlayer
        title=""
        src={src}
        className="w-full h-full"
        playsInline
        onPlay={handlePlay}
      >
        <MediaProvider />
        {/* Default layout includes settings, play/pause, volume, picture-in-picture, and fullscreen without native browser download buttons */}
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default VideoPlayer;