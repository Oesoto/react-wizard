//Importar el objeto con tipos de acciones para usar en el switch
import { actionTypes } from '../actions/action-types';
import { steps } from '../steps_wizard';
import { StateMachine } from '../StateMachine';

//Un reducer es una función
//Toma como parametros un estado y una acción

//Se define un estado inicial para el reducer
const initialState = {
    currentStep: steps.WELCOME //El wizard comienza en el estado WELCOME
};

const wizardReducer = (state = initialState, action) => {
    //Del estado obtengo el paso actual y del payload del action traigo el paso que deseo
    let { currentStep } = state;
    let { desiredStep } = action;
    let stateMachine = new StateMachine();
    switch (action.type) {
        case actionTypes.GO_NEXTSTEP:
            //Con la máquina de estados verifico que el estado deseado sea válido
            let nextStep = stateMachine.transitionTo(currentStep, desiredStep);

            return {
                ...state,
                currentStep: nextStep
            };
        case actionTypes.GO_PREVSTEP:
            let prevStep = stateMachine.transitionFrom(currentStep, desiredStep);
            return {
                ...state,
                currentStep: prevStep
            };

        default:
            return state;
    }
};

export default wizardReducer;
