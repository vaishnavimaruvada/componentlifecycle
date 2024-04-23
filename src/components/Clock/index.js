import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    console.log('component didmount called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    console.log('unmount called')
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    console.log('render method called')
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
