import React, { Fragment } from 'react';

const CurrentVideo = ({ video }) => {
	if (!video) {
		console.log(video);
		return <p>Loading..</p>;
	}
	return (
		<Fragment>
			<div className="ui embed">
				<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="video player" />
			</div>
			<div className="content">
				<h2 className="header">{video.snippet.title}</h2>
				<p>{video.snippet.description}</p>
			</div>
		</Fragment>
	);
};

export default CurrentVideo;
