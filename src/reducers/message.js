import * as types from "../constants/ActionType";
import * as message from "../constants/Message";

const initalSate = message.WELL_COME;

const Message = (state = initalSate, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return [...state];
    default:
      return [...state];
  }
};

export default Message;
