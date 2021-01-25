import React, {Component} from "react";
// import logo from './logo.svg';
// import './App.css';
import ResultComponent from "./kumpulankomponen/ResultComponent";
import Komponenbagi from "./kumpulankomponen/komponenbagi";
import "./kumpulankomponen/komponenbagi.css";

export default class Intikalkulator extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasil: ""
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
    let cekhasil = ""
    if(this.state.hasil.includes("")){
        cekhasil = this.state.hasil.replace("","+")}

    else {
        cekhasil = this.state.hasil}
            console.log(this.state.hasil.replace("","+"))
    try {
        this.setState({                
            hasil: (eval(cekhasil) || "" ) + ""
        })
    }
     catch (konconetry) {
        this.setState({
            hasil: "errror"
        })
    }
};


  render() {
    return(
      <div>
        <div className="fullkalkulator">
          <h1>UJIAN KALKULATOR</h1>
          <ResultComponent hasil={this.state.hasil}/>
          <Komponenbagi klik={this.klik}/>
        </div>
      </div>

    )
  }


}
