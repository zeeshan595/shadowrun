import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import Create, { ICreateProps } from "./Create";
import { RootState } from "../../Controller/Root";

const mapStateToProps: (state: RootState) => ICreateProps = (
  state: RootState
) => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  props: ICreateProps
) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
