import './App.css';
import React from 'react';
import CartContainer from './components/CartContainerr';


class App extends React.Component {
  render(){
    return (
        <div className="App">
          <CartContainer/>
          <h1>hover to see capital!</h1>
        </div>
      )
  }
}

export default App;

