import React, {Component} from 'react';
import Header from './Header';
import Formulario from "./Formulario";
import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from "../Helper";

class App extends Component {

    cotizarSeguro = (datos) => {
        const {marca, year, plan} = datos;

        // Agregar una base de 2000
        let resultado = 2000;

        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaAnio(year);

        // Por cada año restar el 3% al valor del seguro
        resultado -= ((diferencia * 3) * resultado) / 100;

        // Americano 15% Asiático 5% Europeo 30% de incremento al valor actual
        resultado = calcularMarca(marca) * resultado;

        // el plan básico incrementa el valor 20% y el completo 50%
        let incrementoPlan = obtenerPlan(plan);

        // dependiendo del plan incrementar
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

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
