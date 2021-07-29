import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Splash from './components/Splash/Splash';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';
import ProtectedRoute from './components/auth/ProtectedRoute';
import BlockedRoute from './components/auth/BlockedRoute';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
