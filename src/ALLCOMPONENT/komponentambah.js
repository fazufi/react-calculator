import React, {Component} from "react";

export default class Komponentambah extends Component {  

  render() {
    return (
      <div classnmame= "Komponentambah">
      <h4>KOMPONEN TAMBAH</h4>
      <button name="+" onClick={parameter => this.props.klik(parameter.target.name)}>+</button>
      <button name="0" onClick={parameter => this.props.klik(parameter.target.name)}>0</button>
      <button name="1" onClick={parameter => this.props.klik(parameter.target.name)}>1</button>
      <button name="2" onClick={parameter => this.props.klik(parameter.target.name)}>2</button><br/>

      <button name="3" onClick={parameter => this.props.klik(parameter.target.name)}>3</button>
      <button name="4" onClick={parameter => this.props.klik(parameter.target.name)}>4</button>
      <button name="5" onClick={parameter => this.props.klik(parameter.target.name)}>5</button>
      <button name="6" onClick={parameter => this.props.klik(parameter.target.name)}>6</button><br/>

      <button name="7" onClick={parameter => this.props.klik(parameter.target.name)}>7</button>
      <button name="8" onClick={parameter => this.props.klik(parameter.target.name)}>8</button>
      <button name="9" onClick={parameter => this.props.klik(parameter.target.name)}>9</button>
      <button name="=" onClick={parameter => this.props.klik(parameter.target.name)}>=</button>
     
        </div>
    )
  }
}