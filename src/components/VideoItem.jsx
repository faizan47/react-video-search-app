import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	const { snippet } = video;
	// let a = 'id={id.videoId} onVideoSelect={onVideoSelect} snippet={snippet} key={id.videoId}';
	return (
		<div onClick={() => onVideoSelect(video)} className="item video-item">
			<img src={snippet.thumbnails.default.url} alt="" className="ui image" />
			<div className="content">
				<div className="header">{snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
