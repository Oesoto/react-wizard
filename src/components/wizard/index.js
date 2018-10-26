import React, { Component } from 'react';
import WelcomePage from '../welcome_page';
import YearChoosePage from '../year_choose_page';
import CategoryChoosePage from '../category_choose_page';

// import { steps } from './constants';
import { StateMachine } from '../../utilities/StateMachine.js';

//Connect es la función que me permite conectar el componente a la parte del store que le interesa al componente
import { connect } from 'react-redux';
import * as wizardActions from '../../actions/actions-wizard';

class Wizard extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     currentState: steps.WELCOME
        // };
        // this._next = this._next.bind(this);
        // this._back = this._back.bind(this);
        // this._saveVehicle = this._saveVehicle.bind(this);
        this.stateMachine = new StateMachine();
    }

    // _saveVehicle(vehicle) {
    //     let vehicles = this.state.vehicles.concat();
    //     vehicles.push(vehicle);
    //     this.setState({
    //         vehicles: vehicles
    //     });
    // }

    //Ir al siguiente paso del wizard
    // _next(desiredState) {
    //     let currentState = this.state.currentState;
    //     let nextState = this.stateMachine.transitionTo(currentState, desiredState);
    //     this.setState({
    //         currentState: nextState
    //     });
    // }

    //Ir al paso anterior del Wizard
    // _back(desiredState) {
    //     let currentState = this.state.currentState;
    //     this.setState({
    //         currentState: this.stateMachine.transitionFrom(currentState, desiredState)
    //     });
    // }

    /*
   * Just a note -- you'll see the _next and _back functions
   * get passed around to child components alot. This is not
   * a very good practice, and in the real-world it would be
   * better to use a library like redux to handle application
   * state.
   */
    // _currentStep() {
    //     switch (this.props.currentStep) {
    //         case steps.WELCOME:
    //             return <Welcome next={this.props.onGoNextStep} />;
    //         case steps.VEHICLE_CHOOSE:
    //             return <VehicleChoose back={this.props.onGoPrevStep} next={this.props.onGoNextStep} />;
    //         case steps.CAR:
    //             break;
    //         // return <CarForm saveForm={this._saveVehicle} back={this._back} next={this._next} />;
    //         case steps.BOAT:
    //             break;
    //         // return <BoatForm saveForm={this._saveVehicle} back={this._back} next={this._next} />;
    //         case steps.BOAT_DETAIL:
    //             break;
    //         // return <BoatDetail back={this._back} next={this._next} />;
    //         case steps.CONFIRM:
    //             break;
    //         // return <Confirm vehicles={this.state.vehicles} back={this._back} next={this._next} />;
    //         default:
    //             break;
    //         // return <Welcome next={this._next} />;
    //     }
    // }
    // render() {
    //     return <div>{this._currentStep()}</div>;
    // }

    render() {
        return (
            <div>
                {/* {Welcome - Componente} */}
                <WelcomePage currentStep={this.props.currentStep} next={this.props.onGoNextStep} onSaveRateData={this.props.onSaveRateData} />
                {/* Elegir año - Componente */}
                <YearChoosePage
                    currentStep={this.props.currentStep}
                    back={this.props.onGoPrevStep}
                    next={this.props.onGoNextStep}
                    onSaveRateData={this.props.onSaveRateData}
                />
                {/* Elegir categoría - Componente */}
                <CategoryChoosePage
                    currentStep={this.props.currentStep}
                    back={this.props.onGoPrevStep}
                    next={this.props.onGoNextStep}
                    onSaveRateData={this.props.onSaveRateData}
                />
            </div>
        );
    }
}

//Declaro en una función la parte del estado que me interesa conocer
//Hago un mapeo de ese estado a props dando el nombre del prop y la parte del estado
//Recibe como parámetro el state almacenado en Redux
const mapStateToProps = state => {
    return {
        currentStep: state.wizard.currentStep
    };
};

//Se necesitan despachar acciones dentro del componente
//Declaro que tipo de acciones quiero despachar en este contenedor
//Recibe como parámetro 'dispatch'
const mapDispatchToProps = dispatch => {
    return {
        //Acción ir a paso siguiente
        onGoNextStep: desiredNextStep => dispatch(wizardActions.goNextStep(desiredNextStep)),
        //Acción ir al paso anterior
        onGoPrevStep: desiredPrevStep => dispatch(wizardActions.goPrevStep(desiredPrevStep)),
        //Acción guardar datos de la tarifa
        onSaveRateData: (propertyName, propertyValue) => dispatch(wizardActions.saveRateData(propertyName, propertyValue))
    };
};

//connect da acceso al componente a la parte del estado definida en mapStateToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wizard);
