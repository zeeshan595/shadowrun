import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import App, { IAppProps } from "./App";
import { RootState } from "../Controller/Root";

const mapStateToProps: (state: RootState) => IAppProps = (
  state: RootState
) => ({
  Navigation: state.Navigation.Navigation,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  props: IAppProps
) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
