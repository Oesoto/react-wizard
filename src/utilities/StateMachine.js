import { steps } from '../constants/steps_wizard';

/*
 * This class simply helps us coordinate the transitions
 * between states. We've hardcoded the state "tree" in 
 * the constructor. This class makes sure that any
 * transition between states requested by the app
 * are valid.
 */
export class StateMachine {
    constructor() {
        this.transitions = {
            [steps.WELCOME]: [steps.VEHICLE_CHOOSE],
            [steps.VEHICLE_CHOOSE]: [steps.BOAT, steps.CAR],
            [steps.BOAT]: [steps.BOAT_DETAIL],
            [steps.BOAT_DETAIL]: [steps.CONFIRM],
            [steps.CAR]: [steps.CONFIRM],
            [steps.CONFIRM]: [steps.VEHICLE_CHOOSE, steps.FINISH] // FYI the FINISH state is not used
        };
    }

    _reverseObject(obj) {
        let reversed = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                obj[key].forEach(i => {
                    if (reversed[i] === undefined) {
                        reversed[i] = [key];
                    } else {
                        reversed[i].push(key);
                    }
                });
            }
        }
        return reversed;
    }

    _checkState(available, desired) {
        if (available.includes(desired)) {
            return desired;
        } else {
            throw new Error(`Desired state: ${desired} is not available`);
        }
    }

    transitionTo(current, desired) {
        let available = this.transitions[current].concat();
        return this._checkState(available, desired);
    }

    transitionFrom(current, desired) {
        let reversed = this._reverseObject(this.transitions);
        let available = reversed[current].concat();
        return this._checkState(available, desired);
    }
}
