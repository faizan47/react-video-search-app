import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSearch(this.state.term);

	};
	render() {
		return (
			<div className="searchbar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Search Video</label>
						<input value={this.state.term} onChange={this.onInputChange} type="text" />
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
