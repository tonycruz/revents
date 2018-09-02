
import {INCREMENT_COUNT, DECREMENT_COUNT} from './testConstant'
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


export default createReducer(initialState, {
    [INCREMENT_COUNT]: incrementCount,
    [DECREMENT_COUNT]: decrementCount
} );