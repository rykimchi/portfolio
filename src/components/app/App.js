import React, { Component } from 'react';
import './App.css';

import TopNav from './../topNav/TopNav';

class App extends Component {
    render() {
        return (
            <div className="app">
                <TopNav/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
