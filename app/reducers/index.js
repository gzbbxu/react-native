import {MOVE_CENTER} from '../actions/ActionTypes';
import {combineReducers} from 'redux';
// 原始默认state
const defaultState = {
    leftX:0,
    topY:0,
    isShow:true
}
function rightReducer(state = defaultState,action){
    switch(action.type){
        case MOVE_CENTER:
            return {...state,leftX:state.leftX,topY:state.topY};
        default:
            return state;    
    }
}
export default combineReducers({
    rightReducer
});