import React, { Component } from 'react';
import { connect } from 'react-redux';
import { steps } from '../../constants/steps_wizard';

import * as wizardActions from '../../actions/actions-wizard';

export class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noOptionSelected: true,
            currentEntity: ''
        };
    }

    registerEntity = e => {
        this.setState({
            currentEntity: e.target.value,
            noOptionSelected: false
        });
    };

    dispatchSaveAction = () => {
        this.props.onSaveRateData('selectedEntity', this.state.currentEntity);
        this.props.next(steps.VEHICLE_CHOOSE);
    };

    render() {
        if (this.props.currentStep == steps.WELCOME) {
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

//Declaro en una función la parte del estado que me interesa conocer
//Hago un mapeo de ese estado a props dando el nombre del prop y la parte del estado
//Recibe como parámetro el state almacenado en Redux
// const mapStateToProps = state => {
//     return {
//         selectedEntity: state.wizard.collectedData.selectedEntity
//     };
// };

//Se necesitan despachar acciones dentro del componente
//Declaro que tipo de acciones quiero despachar en este contenedor
//Recibe como parámetro 'dispatch'
const mapDispatchToProps = dispatch => {
    return {
        onSaveRateData: (propertyName, propertyValue) => dispatch(wizardActions.saveRateData(propertyName, propertyValue))
    };
};

//connect da acceso al componente a la parte del estado definida en mapStateToProps
export default connect(
    null,
    mapDispatchToProps
)(WelcomePage);
