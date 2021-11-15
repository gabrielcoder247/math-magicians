import React from 'react';
import CalculatorUI from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CalculatorUI />
      </div>
    );
  }
}

export default App;
