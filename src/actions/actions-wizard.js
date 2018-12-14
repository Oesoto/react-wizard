//Aquí se declaran los action creators. Cada action creator devolverá un objeto que contiene internamente el tipo de acción y el payload con los datos necesarios para alterar el estado según esa acción llamada

import { actionTypes } from '../constants/action_types';

//Action Creator para ir a siguiente paso
export const goNextStep = desiredNextStep => {
    return {
        type: actionTypes.GO_NEXTSTEP,
        desiredStep: desiredNextStep
    };
};

//Action Creator para ir al paso anterior
export const goPrevStep = desiredPrevStep => {
    return {
        type: actionTypes.GO_PREVSTEP,
        desiredStep: desiredPrevStep
    };
};

//Action creator para guardar nombre de la entidad
export const saveRateData = properties => {
    return {
        type: actionTypes.SAVE_RATE_DATA,
        payload: properties
    };
};

//Action creator para hacer reset de los datos del wizard de tarifas
export const resetRateData = () => {
    return {
        type: actionTypes.RESET_RATE_DATA
    };
};
