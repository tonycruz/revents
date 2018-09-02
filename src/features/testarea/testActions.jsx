import {INCREMENT_COUNT, DECREMENT_COUNT} from './testConstant';

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNT
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNT
    }
}