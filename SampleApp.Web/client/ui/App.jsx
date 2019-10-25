import React from 'react';
import { Counter } from './components';

class App extends React.Component {
    render() {
        return (
            <div>
                This is React app!
                <Counter />
            </div>
        );
    }
}

export default App;