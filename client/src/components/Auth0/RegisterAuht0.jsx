import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function RegisterAuth0() {

    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
    } = useAuth0()

    return (
        <div className="containerAuth">
            <h1> Auth0 authentication</h1>
            <div>
                <button onClick={loginWithPopup}>Login with Popup</button>
            </div>
            <div>
                <button onClick={loginWithRedirect}>Login with Redirect</button>
            </div>
            <div>
                <button onClick={logout}>Login with Logout</button>
            </div>

            <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"} </h3>
            {isAuthenticated && (
                <pre style={{ textAlign: "start" }}>
                    {JSON.stringify(user, null, 2)}
                </pre>
            )}
        </div>
    )

}