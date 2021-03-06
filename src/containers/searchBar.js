/**
 * Created by miketran on 2/13/17.
 */
import React, {Component } from "react";
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
        };
    }

	/**
   * Sets state when there is a change in the search bar.
	 * @param event
	 */
	onInputChange = (event) => {
        if(!event){}
        this.setState({term: event.target.value});
    };

	/**
   * Calls the action creator, fetch weather, on the search term. Reset.
	 * @param event
	 */
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    };

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group" >
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={this.onInputChange }/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapStateToProps(dispatch){
    return bindActionCreators({fetchWeather},(dispatch));
}

export default connect(null, mapStateToProps)(SearchBar);

