import { combineReducers } from "redux";
import messages from './message-reducer'

let reducers = combineReducers({
    messages
})

export default reducers;