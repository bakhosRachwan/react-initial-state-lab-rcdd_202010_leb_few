import React from 'react'

class Bomb extends React.Component{
  constructor(props) {
  super()
  this.state = {
    someKey: props.someValue
  }
}
  render(){
    return(
      <div>{this.state.someKey}seconds left before I go boom!</div>
    )
  }
}
export default Bomb
