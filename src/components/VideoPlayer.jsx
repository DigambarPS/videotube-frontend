import React from 'react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

// Import Vidstack default player styles
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

export const VideoPlayer = ({ src }) => {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
      <MediaPlayer
        title=""
        src={src}
        className="w-full h-full"
        playsInline
      >
        <MediaProvider />
        {/* Default layout includes settings, play/pause, volume, picture-in-picture, and fullscreen without native browser download buttons */}
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default VideoPlayer;