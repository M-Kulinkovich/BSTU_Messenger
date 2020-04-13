import * as types from "../actions/actionsTypes";

export function sendMessage(message) {
    return {
      type: types.SEND_MESSAGE,
      message
    };
  }