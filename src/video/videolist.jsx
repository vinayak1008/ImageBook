import React from 'react';
import VideoItem from './videoitem';

const VideoList = ({ videos, onVideoSelect }) => {
    const RenderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>;
    });
    return (
    <div>
        Videos: {videos.length}  
        <div className="ui relaxed divided list ">{RenderedList}</div>         
    </div>
    )
}

export default VideoList;