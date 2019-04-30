import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

import Counter from './views/Counter';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';

// render(<Counter />, document.getElementById('main'));

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header> */}
                <section>
                    <Counter />
                </section>
                <section>
                    <CounterContainer />
                </section>
                <section>
                    <TodoListContainer />
                </section>
            </div>
        );
    }
}

export default App;
