import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';

import Home from './Routes/Home/Home'
import Store from './Routes/Store/Store'

function App() {
  return (
    <div class="app">
   <Router>
     <Switch>
      
       <Route path='/store' component={Store} />
       <Route path='/' component={Home} />
     </Switch>
   </Router>
   </div>
  );
}

export default App;
