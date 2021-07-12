import * as Actions from '../Actions/ActionType';

const INITIAL_STATE = {
    count : 0,
}

const CounterReducerApp = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.COUNTER_INCREMENT:
            return {
                count : state.count + 1,
            }
        case Actions.COUNTER_DECREMENT:
            return {
                count : state.count - 1,
            }
        default:
           return state;
    }
}

export default CounterReducerApp;