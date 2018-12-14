import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

const initialState = {
    noOptionSelected: true,
    currentYear: '',
    isUntouched: true
};

//--Paso 2 - Seleccionar año de tarifas
export default class YearChoosePage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.registerYear = this.registerYear.bind(this);
        this.dispatchSaveAction = this.dispatchSaveAction.bind(this);
    }

    //Handler para los botones de selección de año
    registerYear = e => {
        this.setState({
            currentYear: e.target.value,
            noOptionSelected: false,
            isUntouched: false
        });
    };

    /*Handler del botón continuar
    Guardará los datos y despachará la acción para ir
    al siguiente paso */
    dispatchSaveAction = () => {
        this.props.onSaveRateData([{ yearForRate: this.state.currentYear }]);
        this.props.next(steps.CATEGORY_CHOOSE);
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        //Recibe los siguientes props y el estado previo
        //Si el componente está marcado como modificado y se debe hacer reset entonces
        //asignar el estado inicial al estado para hacer reset del componente
        if (!prevState.isUntouched && nextProps.reset) {
            return initialState;
        } else {
            return {};
        }
    }

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
                    <button type="button" onClick={() => this.props.back(steps.WELCOME_RATE)}>
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
