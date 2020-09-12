import { combineReducers } from "redux";

//Reducers
import NavigationReducer, { INavigationState } from "./Navigation/Reducer";

export type RootState = {
  Navigation: INavigationState;
};

export const RootReducer = combineReducers({
  Navigation: NavigationReducer,
});
