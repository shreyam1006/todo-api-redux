import './App.css';
import LoginPage from './components/LoginPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RegisterPage from './components/RegisterPage'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/register" exact component={RegisterPage}/>
          <Route path="/todo" exact component={Todo}/>
          <Route>404 Not Found</Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
