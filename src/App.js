// import './App.css';
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './components/RegisterPage'
import Todo from './components/Todo'
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './styles/mainTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/todo" exact component={Todo} />
            <Route>404 Not Found</Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
