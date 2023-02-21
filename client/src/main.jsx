import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
{/*      <Auth0Provider
      domain="dev-af5jdw3bfwyan7be.us.auth0.com"
      clientId="mWT15MJtMJ6xQdCBmPWubiP4pzbio9Ns"
      authorizationParams={{
        redirect_uri: window.location.origin
        }}
      >*/}
        <App />
      {/*</Auth0Provider>*/}
    </React.StrictMode>
  </Provider>
);
