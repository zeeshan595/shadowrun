import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import Homepage, { IHomepageProps } from "./Homepage";
import { RootState } from "../../Controller/Root";

const mapStateToProps: (state: RootState) => IHomepageProps = (
  state: RootState
) => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  props: IHomepageProps
) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
