import { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  clearInputs = () => {
    this.setState({
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    })
  }

  submitNewTrick = (e) => {
    e.preventDefault();
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewTrick(newTrick)
    this.clearInputs()
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitNewTrick(e)}>
        <select name="stance" className="stance-input" value={this.state.stance} onChange={(e) => this.handleChange(e)} required>
          <option value="" disabled defaultValue>Choose your Stance</option>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>
        <input
          className='trick-name-input'
          type='text'
          name='name'
          placeholder='Name of Trick'
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          required
          />
        <select name="obstacle" className="obstacle-input" value={this.state.obstacle} onChange={(e) => this.handleChange(e)} required>
          <option value="" disabled defaultValue>Choose your Obstacle</option>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rails">Rails</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
        </select>
        <input
          className='tutorial-link-input'
          type='text'
          name='tutorial'
          placeholder='Link to Tutorial'
          value={this.state.tutorial}
          onChange={(e) => this.handleChange(e)}
          required
          />
        <button type='submit' className='submit-btn'>Send It!</button>
      </form>
    )
  }
}





export default Form;