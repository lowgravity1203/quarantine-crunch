import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './users/pages/Users'
import NewWorkout from './workouts/pages/NewWorkout'
import UserWorkouts from './workouts/pages/UserWorkouts'
import UpdateWorkout from './workouts/pages/UpdateWorkout'
import Auth from './users/pages/Auth'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import {AuthContext} from './shared/context/auth-context'

  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

const login = useCallback(() => {
  setIsLoggedIn(true)
}, [])

const logout = useCallback(() => {
  setIsLoggedIn(false)
}, [])

let routes ;

if (isLoggedIn) {
  routes= (
    <Switch>
    <Route path="/"exact>
     <Users />
    </Route>
    <Route path='/:userId/workouts' exact>
     <UserWorkouts />
    </Route>
    <Route path="/workouts/new"exact>
          <NewWorkout />
        </Route>
        <Route path="/workouts/:workoutId">
          <UpdateWorkout />
        </Route>
    <Redirect to="/" />
</Switch>
  )
} else {
  routes = (
    <Switch>
      <Route path="/"exact>
       <Users />
      </Route>
      <Route path='/:userId/workouts' exact>
       <UserWorkouts />
      </Route>
      <Route path="/auth" >
        <Auth />
      </Route>
      <Redirect to="/auth" />
</Switch>
  )
}

  return (
    <AuthContext.Provider 
    value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
    <Router>
    <MainNavigation />
     <main> 
      <Switch>{routes}</Switch>
    </main>
  </Router>
  </AuthContext.Provider>
  )
}

export default App;
