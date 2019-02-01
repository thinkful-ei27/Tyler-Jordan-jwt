import {flipState, FLIP_STATE} from '../actions/dashboardAct'

const initialState = {
    showing: false
}

export default function dashReducer(state = initialState, action){
    if (action.type === FLIP_STATE){
        return Object.assign({}, state, {
            showing: !state.showing
        });
    }
 return state;
}


