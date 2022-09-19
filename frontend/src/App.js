import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { useEffect } from "react";
import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AdEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/post/:id" component={Post} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
