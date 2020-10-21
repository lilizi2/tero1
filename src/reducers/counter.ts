import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ADD, MINUS } from "../constants/counter";

interface RootState {
  isOn: boolean;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const initialState = {
  num: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, num: state.num + 1 };

    case MINUS:
      return { ...state, num: state.num - 1 };

    default:
      return state;
  }
};
