import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

import * as wizardActions from '../../actions/actions-wizard';

const initialState = {
    noOptionSelected: true,
    currentEntity: '',
    isUntouched: true
};

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.registerEntity = this.registerEntity.bind(this);
        this.dispatchSaveAction = this.dispatchSaveAction.bind(this);
    }

    //Handler para los botones de selección de entidad
    registerEntity = e => {
        this.setState({
            currentEntity: e.target.value,
            noOptionSelected: false,
            isUntouched: false
        });
        //Llamar acción en el reducer para desactivar el flag de reset
        // this.props.onOptionSelected();
    };

    /*Handler del botón continuar
    Guardará los datos y despachará la acción para ir
    al siguiente paso */
    dispatchSaveAction = () => {
        // this.props.onSaveRateData('selectedEntity', this.state.currentEntity);
        this.props.onSaveRateData([{ selectedEntity: this.state.currentEntity }]);
        // this.props.onSaveRateData({ selectedEntity: this.state.currentEntity, yearForRate: 2018 });
        this.props.next(steps.YEAR_CHOOSE);
    };

    render() {
        if (this.props.currentStep == steps.WELCOME_RATE) {
            return (
                <div>
                    <p>Selecciona la entidad sobre que quieres conocer las tarifas</p>
                    <button type="button" name="entidad" value="Entidad" onClick={this.registerEntity}>
                        Entidad
                    </button>
                    <button type="button" name="fiduciaria" value="Fiduciaria" onClick={this.registerEntity}>
                        Fiduciaria
                    </button>
                    <button type="button" name="valores" value="Valores" onClick={this.registerEntity}>
                        Valores
                    </button>

                    <button disabled={this.state.noOptionSelected} type="button" onClick={this.dispatchSaveAction}>
                        Continuar
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }
}
