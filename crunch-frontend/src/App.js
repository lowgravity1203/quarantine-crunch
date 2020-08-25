import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './users/pages/Users'
import NewWorkout from './workouts/pages/NewWorkout'
import MainNavigation from './shared/components/Navigation/MainNavigation'

  const App = () => {
  return  <Router>
    <MainNavigation />
     <main> 
      <Switch>
       <Route path="/"exact>
          <Users />
        </Route>
     <Route path="/workouts/new"exact>
          <NewWorkout />
        </Route>
        <Redirect  to="/" />
      </Switch>
    </main>
  </Router>
  
}

export default App;
