import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)

  return props.isLoaded && (
    <Route {...props}>
      {(user)? props.children  : <Redirect to='/'/>}
    </Route>
  )
};


export default ProtectedRoute;
