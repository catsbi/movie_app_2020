import React from 'react';
import PropTypes from "prop-types";

//react component
/**
 * 매번 component 을 새로 구현하고 싶지 않기에 extends React.Component를 해준다.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }
    //dynamic data
    state = {
        count: 0
    };
    add = () => {
        // this.setState({count: this.state.count + 1}); //bad logic
        this.setState(current=>({count:current.count+1}))
    };
    minus = () => {
        // this.setState({count: this.state.count - 1}); //bad logic
        this.setState(current=>({count:current.count-1}))
    };

    componentDidMount() {
        /**
         * Component Mount이후 호출된다.
         */
        console.log("component rendered")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        /**
         * Component 업데이트 후 호출된다.
         */
        console.log("component updated")
    }

    componentWillUnmount() {
        console.log("goodBy unmount");
    }

    render() {
        console.log("rendering");
        return <div>
            <h1>The number is {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    }
}

export default App;
