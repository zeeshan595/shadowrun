import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import Homepage, { IHomepageProps } from "./Homepage";
import { RootState } from "../../Controller/Root";
import { getCookie } from "../../Controller/CookieManager";

const mapStateToProps: (state: RootState) => IHomepageProps = (
  state: RootState
) => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  props: IHomepageProps
): IHomepageProps => ({
  getCookie: (name: string) => getCookie(name),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
