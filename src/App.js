import React from "react";
import Modal from "./Component/Modal";
import medalla from "../src/Img/medalla3.png"
import "./styles.css";
class App extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="App">
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>

        <Modal onClose={this.showModal} show={this.state.show}>
        <div className="Modal2">
                <div className="Nombre">
                    <h1>Richard Alvarez Ruiz</h1>
                </div>
          
                <div className="Cuerpo">
                    <p>POR HABER PARTICIPADO EN EL EVENDO DE BLENDER <br/>
                       PERÚ ORGANIZADO POR UPC</p>
                    {/* <img className="meda" src={medalla}></img> */}
                </div>
                
                <div className="footer">
                    <div className="fecha" >
                      <p> 21 de diciembre del 2019 </p>
                    </div>  
                    <div className="imagenes">
                      <img src={medalla} className="imagen"/>
                     </div>
                </div>

                

                    
                
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
