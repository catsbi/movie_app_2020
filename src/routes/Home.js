import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import PropTypes from "prop-types";
import "./Home.css";

//react component
/**
 * 매번 component 을 새로 구현하고 싶지 않기에 extends React.Component를 해준다.
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }

    //dynamic data
    state = {
        isLoading: true,
        count: 0,
        movies: [],
    };
    add = () => {
        // this.setState({count: this.state.count + 1}); //bad logic
        this.setState(current => ({ count: current.count + 1 }))
    };
    minus = () => {
        // this.setState({count: this.state.count - 1}); //bad logic
        this.setState(current => ({ count: current.count - 1 }))
    };
    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({ movies: movies, isLoading: false })
    };

    componentDidMount() {
        /**
         * Component Mount이후 호출된다.
         */
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        /**
         * Component 업데이트 후 호출된다.
         */
        console.log("component updated")
    }

    componentWillUnmount() {
        console.log("goodBye unmount");
    }

    render() {
        console.log("rendering");
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ?
                    (
                        <div className="loader">
                            <span className="loader_text">Loading...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie key={movie.id}
                                       id={movie.id}
                                       year={movie.year}
                                       title={movie.title}
                                       summary={movie.summary}
                                       poster={movie.medium_cover_image}
                                       genres={movie.genres}
                                />
                            ))}
                        </div>
                    )}
            </section>
        );
    }
}

export default Home;
