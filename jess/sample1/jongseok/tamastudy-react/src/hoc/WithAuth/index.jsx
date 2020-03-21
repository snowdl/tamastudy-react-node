import React from 'react';

export const AuthContext = React.createContext({
  authenticated: null,
  loading: true,
});

const WithAuth = (WrappedComponent) => {
  const authProps = {
    authenticated: true,
    loading: false,
  };

  return (props) => {
    return (
      <AuthContext.Provider value={authProps}>
        <WrappedComponent {...props} />
      </AuthContext.Provider>
    );
  };
};

export default WithAuth;
