import React, { Component } from 'react';
import { steps } from '../../constants/steps_wizard';

//--Paso 2 - Seleccionar vehiculo
export class VehicleChoosePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            errors: []
        };
        this._onChange = this._onChange.bind(this);
        this._validate = this._validate.bind(this);
        this._back = this._back.bind(this);
    }

    _onChange(e, { value }) {
        this.setState({
            value: value,
            errors: []
        });
    }

    _validate(e) {
        e.preventDefault();
        let value = this.state.value;
        if (value === 'car') {
            this.props.next(steps.CAR);
        } else if (value === 'boat') {
            this.props.next(steps.BOAT);
        } else {
            this.setState({
                errors: ['Please choose a vehicle type']
            });
        }
    }

    _back() {
        this.props.back(steps.WELCOME);
    }

    render() {
        if (this.props.currentStep == steps.VEHICLE_CHOOSE) {
            return (
                <div>
                    <p>Paso 2: Selección de vehículo</p>
                    <button type="button" onClick={this._back}>
                        Back
                    </button>
                    <button type="button" onClick={this._back}>
                        Next
                    </button>
                </div>
            );
        } else {
        }
        return null;
    }
}
