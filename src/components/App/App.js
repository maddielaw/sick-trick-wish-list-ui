import { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import fetchTricks from '../../apiCalls';
import TrickContainer from '../TrickContainer/TrickContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
    fetchTricks()
      .then(data => {
        this.setState({ tricks: data})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <TrickContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;