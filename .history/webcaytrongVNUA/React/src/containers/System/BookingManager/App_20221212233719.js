import React, { Component } from "react";
import axios from "axios";

import { search } from "./utils";
import dataPatients from "./dataPatients";

class App extends Component {
    state = {
        dataPatients: null,
        loading: false,
        value: ""
    };

    search = async val => {
        this.setState({ loading: true });
        const results = await search(
            `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
        );
        const dataPatients = results;

        this.setState({ dataPatients, loading: false });
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    };

    get renderMovies() {
        let dataPatients = <h4>There's no dataPatients</h4>;
        if (this.state.dataPatients) {
            dataPatients = <dataPatients list={this.state.dataPatients} />;
        }

        return dataPatients;
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Type something to search"
                />
                {this.renderMovies}
            </div>
        );
    }
}

export default App;
