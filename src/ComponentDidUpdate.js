import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
   
    constructor(props) {
        super(props);
      console.log(this.props)
        this.state = {
          reptile: 'alligator',
          color: '#008f68',
          active:false,
        };
      }
    //   componentDidMount(){
    //     console.log(this.props)
    //   }
    componentDidUpdate(prevProps, prevState) {
        // only executes if old state.active is changed as we give dependency in useEffect in functional components
        console.log("old props is",prevProps.name)
        console.log("new props is",this.props.name)
        
       
        console.log("old sate is",prevState.active)
        console.log("new state is",this.state.active)
         console.log("old sate is",prevState.reptile)
        console.log("new state is",this.state.reptile)
         if (prevState.active !== this.state.active) {
            console.log("state.active is chahged")
          // ... do something
        }
        //   if (prevProps.name !== this.props.name) {
        //     console.log("props.name is chahged")
        //   // ... do something
        // }
      }
  render() {
    return (
      <div>ComponentDidUpdate
        <button onClick={()=> this.setState({active: !this.state.active})}>change chid old state </button>
        <button onClick={()=> this.setState({reptile: "blue"})}>change chid old state.reptile </button>
      </div>
    )
  }
}
