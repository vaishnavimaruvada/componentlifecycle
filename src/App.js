import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showclock: false}

  onToggleClick = () => {
    this.setState(prevState => ({showclock: !prevState.showclock}))
  }

  render() {
    const {showclock} = this.state
    console.log(showclock)

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClick}
        >
          {showclock ? 'HideClock' : 'showClock'}
        </button>
        {showclock && <Clock />}
      </div>
    )
  }
}

export default App
