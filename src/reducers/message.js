import * as types from "../constants/ActionType";
import * as message from "../constants/Message";

const initalSate = message.WELL_COME;

const Message = (state = initalSate, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return [...state];
  }
};

export default Message;
