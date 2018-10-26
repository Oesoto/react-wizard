import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

//--Paso 2 - Seleccionar año de tarifario
export default class YearChoosePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noOptionSelected: true,
            currentYear: ''
        };
    }

    //Handler para los botones de selección de año
    registerYear = e => {
        this.setState({
            currentYear: e.target.value,
            noOptionSelected: false
        });
    };

    /*Handler del botón continuar
    Guardará los datos y despachará la acción para ir
    al siguiente paso */
    dispatchSaveAction = () => {
        this.props.onSaveRateData('yearForRate', this.state.currentYear);
        this.props.next(steps.CATEGORY_CHOOSE);
    };

    // _validate(e) {
    //     e.preventDefault();
    //     let value = this.state.value;
    //     if (value === 'car') {
    //         this.props.next(steps.CAR);
    //     } else if (value === 'boat') {
    //         this.props.next(steps.BOAT);
    //     } else {
    //         this.setState({
    //             errors: ['Please choose a vehicle type']
    //         });
    //     }
    // }

    render() {
        if (this.props.currentStep == steps.YEAR_CHOOSE) {
            return (
                <div>
                    <p>Paso 2: Selección de año</p>
                    <button type="button" name="2019" value="2019" onClick={this.registerYear}>
                        2019
                    </button>
                    <button type="button" name="2018" value="2018" onClick={this.registerYear}>
                        2018
                    </button>
                    <button type="button" name="2017" value="2017" onClick={this.registerYear}>
                        2017
                    </button>
                    <button type="button" onClick={() => this.props.back(steps.WELCOME)}>
                        Atrás
                    </button>
                    <button type="button" disabled={this.state.noOptionSelected} onClick={this.dispatchSaveAction}>
                        Siguiente
                    </button>
                </div>
            );
        } else {
        }
        return null;
    }
}
