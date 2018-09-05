
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    COUNTER_ACTION_FINISHED,
    COUNTER_ACTION_STARTED
}
from './testConstant';
import {createReducer} from '../../app/common/util/reducerUtil'


const initialState = {
    data: 34
}

export const incrementCount = (state, payload) => {
    return { ...state, data: state.data + 1}
}
export const decrementCount = (state, payload) => {
    return { ...state, data: state.data - 1}
}

export const counterActionStarted = (state, payload) => {
    return { ...state,
        loading: true
    }
}

export const counterActionFinished = (state, payload) => {
    return { ...state,
        loading: false
    }
}
export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCount,
    [DECREMENT_COUNTER]: decrementCount,
    [COUNTER_ACTION_STARTED]: counterActionStarted,
    [COUNTER_ACTION_FINISHED]: counterActionFinished
} );