import { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import { fetchTricks, postTrick } from '../../apiCalls';
import TrickContainer from '../TrickContainer/TrickContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  addNewTrick = (newTrick) => {
    postTrick(newTrick).then(data => {
      this.setState({tricks: [...this.state.tricks, data]})
    })
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
        <Form addNewTrick={this.addNewTrick}/>
        <TrickContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;