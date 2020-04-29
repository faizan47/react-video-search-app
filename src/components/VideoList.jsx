import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const Videos = videos.map((video) => {
		return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
	});

	return <div className="ui relaxed divided list">{Videos}</div>;
};

export default VideoList;
