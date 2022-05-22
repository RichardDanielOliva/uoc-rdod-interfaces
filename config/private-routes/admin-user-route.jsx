import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { connect } from "react-redux";

import { useMsal } from "@azure/msal-react";
import LoginForm from "../../components/login/form/login-form.component";

const AdminUserRoute = ({ children, user }) => {
  const { accounts } = useMsal();

  if (!user?.roles || !user.roles.includes("ADMIN")) {
    return <div>You need to be admin to access this page</div>;
  }

  return (
    <>
      <AuthenticatedTemplate>
        {user && accounts.length > 0
          ? children
          : "Loading..."}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginForm />
      </UnauthenticatedTemplate>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(AdminUserRoute);
