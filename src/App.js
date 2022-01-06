import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { PrivateRoute } from "./privateroute/privateRoute";
import { StudentParent } from "./components/addstudent/StudentParent";
import { ContestParent } from "./components/addcontest/ContestParent";
import { SignupParent } from "./components/signup/SignupParent";
import { LoginParent } from "./components/login/LoginParent";
import { ShowContestParent } from "./components/showcontest/ShowContestParent";
import { NotFound } from "./components/notfound/NotFound";
import { ProfileParent } from "./components/profile/ProfileParent";
import { AdminHome } from "./components/adminhome/AdminHome";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/addstudent">
            <StudentParent />
          </PrivateRoute>
          <PrivateRoute exact path="/addcontest">
            <ContestParent />
          </PrivateRoute>
          <PrivateRoute exact path="/adminhome">
            <AdminHome />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <ProfileParent />
          </PrivateRoute>
          <Route exact path="/signup">
            <SignupParent />
          </Route>
          <Route exact path="/admin">
            <LoginParent />
          </Route>
          <Route exact path="/">
            <ShowContestParent />
          </Route>
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
