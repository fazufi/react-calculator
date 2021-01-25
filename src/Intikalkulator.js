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
      Bagi: false,
      Nontambah: true,
      Nonkurang: true,
      Nonkali: true,
      Nonbagi: true
      

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
          <h1>PILIH SALAH SATU</h1>
          <div className="buttonpilih">
          <button onClick={() => this.setState({Tambah: !this.state.Tambah})}>TBH</button>           
          <button onClick={() => this.setState({Kurang: !this.state.Kurang})}>KRG</button>
          <button onClick={() => this.setState({Kali: !this.state.Kali})}>KALI</button>
          <button onClick={() => this.setState({Bagi: !this.state.Bagi})}>BAGI</button>
          </div>
          
          {/* {this.state.showHasil && (
                <Comp2
                  biodata={this.state.biodata}
                  closeHasil={() => this.setState({ showHasil: false })}
                  closeAnak={() => this.setState({ showAnak: false })}
                  />

          <button onClick={() => this.props.closeHasil()}>Close</button> */}





          {this.state.Tambah && <Komponentambah klik={this.klik}/>}                
          {this.state.Kurang && (
            <Komponenkurang
              
              // hasil={this.state.hasil}
              // Kurang={() => this.sestState({Nonkukrang: false})}
              // Nonkurang={() => this.setState({Kurang: false})}
              klik={this.klik} 
            />
          )}         
          {this.state.Kali && <Komponenkali klik={this.klik}/>}
          {this.state.Bagi && <Komponenbagi klik={this.klik}/>}
  
          {/* <Komponenbagi klik={this.klik}/> */}
        </div>
      </div>

    )
  }


}
