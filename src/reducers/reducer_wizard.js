//Importar el objeto con tipos de acciones para usar en el switch
import { actionTypes } from '../constants/action_types';
import { steps } from '../constants';
import { StateMachine } from '../utilities/StateMachine';

//Un reducer es una función
//Toma como parametros un estado y una acción

//Se define un estado inicial para el reducer
const initialState = {
    //El wizard comienza en el estado WELCOME
    // currentStep: steps.WELCOME_RATE,
    currentStep: steps.WELCOME_RATE,
    initWithInitialState: true,
    //En este objeto se guardaran todos los datos almacenados en el wizard
    collectedData: {}
};

export const wizardReducer = (state = initialState, action) => {
    //Del estado obtengo el paso actual y del payload del action traigo el paso que deseo
    let { currentStep } = state;
    let { desiredStep } = action;
    let stateMachine = new StateMachine();
    switch (action.type) {
        //Ir al siguiente paso del Wizard
        case actionTypes.GO_NEXTSTEP:
            //Con la máquina de estados verifico que el estado deseado sea válido
            let nextStep = stateMachine.transitionTo(currentStep, desiredStep);

            return {
                ...state,
                currentStep: nextStep
            };
        //Ir al paso anterior en el wizard
        case actionTypes.GO_PREVSTEP:
            let prevStep = stateMachine.transitionFrom(currentStep, desiredStep);
            return {
                ...state,
                currentStep: prevStep
            };
        //Guardar la entidad seleccionada en el objeto collectedData
        case actionTypes.SAVE_RATE_DATA:
            // return {
            //     //Propagación de estado y de collected data para no perder
            //     //los datos ya almacenados y agregar lo nuevo que ingresó
            //     ...state,
            //     collectedData: {
            //         ...state.collectedData,
            //         [action.payload.propertyName]: action.payload.propertyValue
            //     }
            // };
            let newState = { ...state, initWithInitialState: false };

            action.payload.map(property => {
                newState.collectedData = {
                    ...newState.collectedData,
                    [Object.entries(property)[0][0]]: Object.entries(property)[0][1]
                };
            });

            return { ...newState };

        case actionTypes.RESET_RATE_DATA:
            return initialState;

        default:
            return state;
    }
};
