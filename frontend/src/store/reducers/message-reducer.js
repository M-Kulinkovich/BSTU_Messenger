import * as types from "../actions/actionsTypes";

const initialState = {
    message:[]
}

const messages = (state = initialState, action)=>{
    switch(action.type){
        case types.SEND_MESSAGE:
            return {...state,message:action.message}
        default:
            return state
    }
}

export default messages