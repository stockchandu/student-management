import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, path }) => {

    let localToken = localStorage.getItem("token");
    localToken = JSON.parse(localToken);

    let sessionToken = sessionStorage.getItem("token");
    sessionToken = JSON.parse(sessionToken);

    console.log(sessionToken)
    if (!localToken && !sessionToken) {
        return <Redirect to="/admin" push={true} />
    }

    return <Route path={path}>
        {children}
    </Route>
}