import React from 'react';
import Buttons from "./Components/Buttons";
import Result from "./Components/Result"
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expression: "",
      answer: ""
    }
  }
  handleClick=(event)=>{
    try{
      if(event.target.name === "AC"){
        this.setState({expression: ""})
        this.setState({answer: ""})
      }
      else if(event.target.name === "="){
        this.showResult()
      }
      else{
        let enteredValues = this.state.expression+event.target.name;
        if(enteredValues.length <= 25){
          this.setState({expression: enteredValues})
        }
      }
    }
    catch(error){
      this.setState({expression: "ERROR"})
    }
  }
  showResult = ()=>{
    let expression = this.state.expression;
    this.setState({answer: eval(expression)})
    this.setState({expression: ""})
  }
  render(){
    return(
      <div className="App">
        <h1>Calulator You Have Been Waiting For</h1>
        <Result expression={this.state.expression} answer={this.state.answer}/>
        <Buttons handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
