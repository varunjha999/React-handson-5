import React, { Component } from 'react'
import Purecomp from './PureComponent'

export class ParentComponent extends Component {
  constructor(props){
    super(props)
      this.state = {
        fName : "",
        lName : ""
    }
    
  }

  // componentDidMount(){
  //   setInterval(() => {
  //     this.setState({
  //       fName : 'tony',
  //       lName: "stark"
  //     })
  //   }, 1000)
  // }
  render() {

    return (
      <div>
        {console.log("Parent Component")}
         <Purecomp name = {this.state.fName}></Purecomp>
      </div>
    )
  }
}

export default ParentComponent
