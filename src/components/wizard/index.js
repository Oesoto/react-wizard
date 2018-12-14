import React, { Component } from 'react';
import WelcomePage from '../welcome_page';
import YearChoosePage from '../year_choose_page';
import CategoryChoosePage from '../category_choose_page';
import SubcategoryChoosePage from '../subcategory_choose_page';
import RateDisplay from '../rate_display';

// import { steps } from './constants';
import { StateMachine } from '../../utilities/StateMachine.js';

//Connect es la función que me permite conectar el componente a la parte del store que le interesa al componente
import { connect } from 'react-redux';
import * as wizardActions from '../../actions/actions-wizard';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.stateMachine = new StateMachine();
    }

    render() {
        return (
            <div>
                {/* {Welcome - Componente} */}
                <WelcomePage
                    currentStep={this.props.currentStep}
                    // reset={this.props.initWithInitialState}
                    next={this.props.onGoNextStep}
                    // onOptionSelected={this.props.onOptionSelected}
                    onSaveRateData={this.props.onSaveRateData}
                    key={this.props.currentKey}
                />
                {/* Elegir año - Componente */}
                <YearChoosePage
                    currentStep={this.props.currentStep}
                    // reset={this.props.initWithInitialState}
                    back={this.props.onGoPrevStep}
                    next={this.props.onGoNextStep}
                    onSaveRateData={this.props.onSaveRateData}
                    key={this.props.currentKey + 1}
                />
                {/* Elegir categoría - Componente */}
                <CategoryChoosePage
                    currentStep={this.props.currentStep}
                    // reset={this.props.initWithInitialState}
                    back={this.props.onGoPrevStep}
                    next={this.props.onGoNextStep}
                    onSaveRateData={this.props.onSaveRateData}
                    key={this.props.currentKey + 2}
                />
                {/* Elegir subcategoría - Componente */}
                <SubcategoryChoosePage
                    currentStep={this.props.currentStep}
                    // reset={this.props.initWithInitialState}
                    categoryId={''}
                    back={this.props.onGoPrevStep}
                    next={this.props.onGoNextStep}
                    onSaveRateData={this.props.onSaveRateData}
                    key={this.props.currentKey + 3}
                />
                {/* Mostrar tarifas - Componente */}
                <RateDisplay currentStep={this.props.currentStep} key={this.props.currentKey + 4} reset={this.props.onResetRateData} />
            </div>
        );
    }
}

//Declaro en una función la parte del estado que me interesa conocer
//Hago un mapeo de ese estado a props dando el nombre del prop y la parte del estado
//Recibe como parámetro el state almacenado en Redux
const mapStateToProps = state => {
    return {
        currentStep: state.wizard.currentStep,
        currentKey: state.wizard.key
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
        onSaveRateData: (propertyName, propertyValue) => dispatch(wizardActions.saveRateData(propertyName, propertyValue)),
        //Acción borrar los datos almacenados de tarifas
        onResetRateData: () => dispatch(wizardActions.resetRateData())
    };
};

//connect da acceso al componente a la parte del estado definida en mapStateToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wizard);
