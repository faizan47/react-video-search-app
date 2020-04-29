import React from 'react';
import Search from './Search';
import VideoList from './VideoList';
import CurrentVideo from './CurrentVideo';
import youtube from '../apis/youtube';

class App extends React.Component {
	state = { videos: [], SelectedVideo: null };
	onSearch = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				type: 'video',
				key: process.env.REACT_APP_YOUTUBE_API_KEY
			}
		});
		this.setState({ videos: response.data.items, SelectedVideo: response.data.items[0] });
	};
	componentDidMount() {
		this.onSearch('funny cat videos');
	}
	onVideoSelect = (video) => {
		this.setState({ SelectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<Search onSearch={this.onSearch} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<CurrentVideo video={this.state.SelectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
