import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/LogSignUpModal/LogSignUp';
import Splash from './components/Splash/Splash';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';
import ProtectedRoute from './components/auth/ProtectedRoute';
import BlockedRoute from './components/auth/BlockedRoute';
import Home from './components/Home/Home';
import SpotifyWebApi from "spotify-web-api-js";
import UpdatePageModal from './components/UpdatePage/UpdatePage';
import Sidebar from './components/Sidebar/Sidebar';
// import UpdatePage from './components/UpdatePage/UpdatePate';
import BetDetailPage from './components/BetDetailPage/BetDetailPage';

const spotify = new SpotifyWebApi();


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // return isLoaded &&
  return isLoaded && (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <Navigation spotify={spotify} isLoaded={isLoaded} />
        </Route>
        <ProtectedRoute isLoaded={isLoaded} exact path="/bets">
          <Home spotify={spotify} />
        </ProtectedRoute>
        {/* <ProtectedRoute exact path="/bets/:id/update">
          <UpdatePageModal />
        </ProtectedRoute> */}
        <ProtectedRoute isLoaded={isLoaded} exact path="/bets/:id">
          <BetDetailPage spotify={spotify} />
        </ProtectedRoute>
        <BlockedRoute path='/'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
