import React from 'react'

class Bomb extends React.Component{
  constructor(props) {
  super()
  this.state = {
    secondsLeft: props.initialCount
  }
}
  render(){
    return(
      <div>
      if(this.state.secondsLeft !== 0){
      {this.state.secondsLeft}seconds left before I go boom!
    }esle
      Boom!
    </div>
    )
  }
}
export default Bomb
