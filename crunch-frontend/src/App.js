import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './users/pages/Users'
import NewWorkout from './workouts/pages/NewWorkout'
import UserWorkouts from './workouts/pages/UserWorkouts'
import UpdateWorkout from './workouts/pages/UpdateWorkout'
import Auth from './users/pages/Auth'
import MainNavigation from './shared/components/Navigation/MainNavigation'

  const App = () => {
  return  <Router>
    <MainNavigation />
     <main> 
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
        <Route path="/auth" >
          <Auth />
        </Route>
        <Redirect  to="/" />
      </Switch>
    </main>
  </Router>
  
}

export default App;
