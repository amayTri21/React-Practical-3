
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';


import { BrowserRouter, Route, Switch,useHistory } from 'react-router-dom';
// import Search from './components/Search';
function App() {

  const history = useHistory();
   var currentPathname = null;
  var  currentSearch = null; 

  history.listen((newLocation, action) => {
    if (action === "PUSH") {
      if (
        newLocation.pathname !== currentPathname ||
        newLocation.search !== currentSearch
      ) {
        currentPathname = newLocation.pathname;
        currentSearch = newLocation.search;

        history.push({
          pathname: newLocation.pathname,
          search: newLocation.search
        });
      }
    } else {
      history.go(1);
    }
  });
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

