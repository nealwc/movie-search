import React, { Component } from "react";
import Header from "./Header";
import SearchForm from "./Search";
import Container from 'react-bootstrap/Container';
import Search from "../utils/API"

class MovieContainer extends Component {
    state = {
        search: "",
        result: {}
    };
    /*
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState({});
    */

    searchMovies = query => {
        Search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.searchMovies(this.state.search);
        console.log(this.state.result);
    }

    render() {
        return (
            <Container>
                <Header />
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </Container>
        )
    }
};

export default MovieContainer;