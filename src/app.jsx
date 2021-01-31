import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Main from './components/main/main';


const App = ({FileInput, authService}) => {

  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path={["/","/login"]} exact>
            <Login authService={authService}/>
          </Route>
          <Route path="/main">
            <Main FileInput={FileInput} authService={authService}/>
          </Route>
        </Switch>
      </Router>
      </div>
  );
};

export default App;