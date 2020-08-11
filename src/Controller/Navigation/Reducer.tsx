import { Action } from "redux";
import INavigation from "../../Model/Navigation";
import Homepage from "../../View/Homepage/Homepage.connect";
import Create from "../../View/Create/Create.connect";

export interface INavigationState {
  Navigation: INavigation[];
}

export const defaultState: INavigationState = {
  Navigation: [
    {
      Path: "/",
      Component: Homepage,
      exact: true,
    },
    {
      Path: "/create",
      Component: Create,
      exact: true,
    },
  ],
};

export default (
  state: INavigationState = defaultState,
  action: Action
): INavigationState => {
  return state;
};
