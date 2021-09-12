
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Search from './components/Search';
function App() {
  return (
    <>
      
      <Switch>
                <Route exact path="/" component={Signup} exact />
                <Route exact path="/login" component={Login} />
                <Route exact path="/search" component={Search} />
                

              
                <Route component={Error} />
            </Switch>

    </>
  );
}

export default App;

