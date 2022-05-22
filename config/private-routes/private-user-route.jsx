import { connect } from "react-redux";

import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import LoginForm from "../../components/login/form/login-form.component";
import { setLoginRedirectUrl } from "../../redux/global-settings/global-settings.actions";
import { resetUser } from "../../redux/user/user.actions";

const PrivateUserRoute = ({ children, user, className }) => {
  const { accounts } = useMsal();

  return (
    <>
      <AuthenticatedTemplate>
        {user && accounts.length > 0 ? children : "Loading..."}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginForm className={className} />
      </UnauthenticatedTemplate>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export const mapDispatchToProps = (dispatch) => ({
  setLoginRedirectUrl: (url) => dispatch(setLoginRedirectUrl(url)),
  resetUser: () => dispatch(resetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateUserRoute);

/*

import { connect } from "react-redux";
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { setLoginRedirectUrl } from "../../redux/global-settings/global-settings.actions";
import { resetUser } from "../../redux/user/user.actions";

const PrivateUserRoute = ({ children }) => {
  return (
    <>
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        {children}
      </MsalAuthenticationTemplate>
    </>
  );
};

export default PrivateUserRoute;

 */