import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import Create, { ICreateProps } from "./Create";
import { RootState } from "../../Controller/Root";
import {
  updateOrCreateCookie,
  getCookie,
} from "../../Controller/CookieManager";

const mapStateToProps: (state: RootState) => ICreateProps = (
  state: RootState
) => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  props: ICreateProps
): ICreateProps => ({
  updateOrCreateCookie: (name, value, expires) =>
    updateOrCreateCookie(name, value, expires),
  getCookie: (name) => getCookie(name),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
