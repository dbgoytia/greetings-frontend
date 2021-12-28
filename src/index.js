import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Greeting greeting={{ text: 'Welcome to react' }} />
            </div>
        )
    }
}

const Greeting = ({ greeting }) => <h1>{greeting.text}</h1>


ReactDOM.render(
    <App />,
    document.getElementById('root')
);