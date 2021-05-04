import { Component } from "react";

class Time extends Component {
  state = {
    time: new Date
  };


  callMe () {
    setInterval ( () => {
      this.setState( { time: new Date() } )
    }, 1000 )
  }
  render() {
    return (
      <div className = "time" >
        <h1>{ this.state.time.toLocaleTimeString() }</h1>
        { this.callMe() }
      </div>
    )
  }
}

export default Time;