import React, {Component} from 'react';
import Header from './Header';
import Formulario from "./Formulario";

class App extends Component {

    cotizarSeguro = (datos) => {
        console.log(datos);
    };

    render() {
        return (
            <div className="contenedor">
                <Header
                    titulo = 'Cotizador de Seguro de auto'
                />
                <div className="contenedor-formulario">
                    <Formulario
                        cotizarSeguro = {this.cotizarSeguro}
                    />
                </div>
            </div>
        );
    }
}

export default App;
