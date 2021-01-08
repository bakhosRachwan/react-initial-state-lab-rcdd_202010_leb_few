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
      if(this.state.secondsLeft !== 0){
      <div>{this.state.secondsLeft}seconds left before I go boom!</div>
    }esle
      <div>Boom!</div>
    )
  }
}
export default Bomb
