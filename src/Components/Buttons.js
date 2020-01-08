import React from 'react';
import "./button.css"

class Buttons extends React.Component{
  render(){
    return(
      <div>
        <div>
            <button name="(" onClick={(e)=>{this.props.handleClick(e)}}>(</button>
            <button name=")"  onClick={(e)=>{this.props.handleClick(e)}}>)</button>
            <button name="%"  onClick={(e)=>{this.props.handleClick(e)}}>%</button>
            <button name="AC"  onClick={(e)=>{this.props.handleClick(e)}}>AC</button>
        </div>
        <div>
            <button name="7"  onClick={(e)=>{this.props.handleClick(e)}}>7</button>
            <button name="8"  onClick={(e)=>{this.props.handleClick(e)}}>8</button>
            <button name="9"  onClick={(e)=>{this.props.handleClick(e)}}>9</button>
            <button name="/"  onClick={(e)=>{this.props.handleClick(e)}}>/</button>
        </div>
        <div>
            <button name="4"  onClick={(e)=>{this.props.handleClick(e)}}>4</button>
            <button name="5"  onClick={(e)=>{this.props.handleClick(e)}}>5</button>
            <button name="6"  onClick={(e)=>{this.props.handleClick(e)}}>6</button>
            <button name="*"  onClick={(e)=>{this.props.handleClick(e)}}>*</button>
        </div>
        <div>
            <button name="1"  onClick={(e)=>{this.props.handleClick(e)}}>1</button>
            <button name="2"  onClick={(e)=>{this.props.handleClick(e)}}>2</button>
            <button name="3"  onClick={(e)=>{this.props.handleClick(e)}}>3</button>
            <button name="-"  onClick={(e)=>{this.props.handleClick(e)}}>-</button>
        </div>
        <div>
            <button name="0"  onClick={(e)=>{this.props.handleClick(e)}}>0</button>
            <button name="."  onClick={(e)=>{this.props.handleClick(e)}}>.</button>
            <button name="="  onClick={(e)=>{this.props.handleClick(e)}}>=</button>
            <button name="+"  onClick={(e)=>{this.props.handleClick(e)}}>+</button>
        </div>
      </div>
    );
  }
}

export default Buttons;
