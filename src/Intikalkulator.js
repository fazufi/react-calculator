import React, {Component} from "react";
// import logo from './logo.svg';
// import './App.css';
import ResultComponent from "./kumpulankomponen/ResultComponent";
import Komponenbagi from "./kumpulankomponen/komponenbagi";
import "./kumpulankomponen/komponenbagi.css";
import Komponentambah from "./kumpulankomponen/komponentambah";
import Komponenkurang from "./kumpulankomponen/komponkurang";
import Komponenkali from "./kumpulankomponen/komponenkali";

export default class Intikalkulator extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasil: "",
      Tambah: false,
      Kurang: false,
      Kali: false,
      Bagi: false

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
          <h1>HASIL KALKULATOR</h1>
          <ResultComponent hasil={this.state.hasil}/>

          {this.state.Tambah && <Komponentambah klik={this.klik}/>}
          {this.state.Kurang && <Komponenkurang klik={this.klik}/>}
          {this.state.Kali && <Komponenkali klik={this.klik}/>}
          {this.state.Bagi && <Komponenbagi klik={this.klik}/>}
          <h1>PILIH SALAH SATU</h1>
          <div className="buttonpilih">
          <button onClick={() => this.setState({Tambah: !this.state.Tambah})}>TBH/CLOS</button>
          <button onClick={() => this.setState({Kurang: !this.state.Kurang})}>KRG/CLOSE</button>
          <button onClick={() => this.setState({Kali: !this.state.Kali})}>KALI/CLOSE</button>
          <button onClick={() => this.setState({Bagi: !this.state.Bagi})}>BAGI/CLOSE</button>
          </div>
          {/* <Komponenbagi klik={this.klik}/> */}
        </div>
      </div>

    )
  }


}
