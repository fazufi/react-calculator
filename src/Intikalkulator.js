import React, {Component} from "react";
import ResultComponent from "./ALLCOMPONENT/ResultComponent";
import Komponenbagi from "./ALLCOMPONENT/komponenbagi";
import Komponentambah from "./ALLCOMPONENT/komponentambah";
import Komponenkurang from "./ALLCOMPONENT/komponkurang";
import Komponenkali from "./ALLCOMPONENT/komponenkali";
import "./stylecalculator.css";

export default class Intikalkulator extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasil: "",
     }
  };

klik = tombol => {
  if(tombol === "="){
    this.kodehitung()}
  else {
    this.setState({
      hasil: this.state.hasil + tombol})
    }
  };

  kodehitung = () => {
    var cekhasil = ""
    if(this.state.hasil){
        cekhasil = this.state.hasil.replace("","+")}
      
    else {
        cekhasil = this.state.hasil}
            
    try {
        this.setState({   
          // eslint-disable-next-line             
            hasil: (eval(cekhasil) || "" ) + ""
        })
    }
     catch (konconetry) { alert("ngantuk ta!!!!!!")
        this.setState({ cekhasil })
    }
};


  render() {
    return(
      <div>

        <div className="fullkalkulator">
          <h1>SELECT ONE:</h1>
          <div className="buttonpilih">
            <button onClick={() => this.setState({op: 'plus'})}>+</button>           
            <button onClick={() => this.setState({op: 'min'})}>-</button>
            <button onClick={() => this.setState({op: 'kali'})}>X</button>
            <button onClick={() => this.setState({op: 'bagi'})}>:</button>
          </div>  

          <ResultComponent hasil={this.state.hasil}/>                  

          {this.state.op ==='plus' && <Komponentambah klik={this.klik}/>}        
          {this.state.op ==='min' && <Komponenkurang klik={this.klik} />}                
          {this.state.op ==='kali' && <Komponenkali klik={this.klik}/>}
          {this.state.op ==='bagi' && <Komponenbagi klik={this.klik}/>}         
        </div>
      </div>
    )
  }

}
