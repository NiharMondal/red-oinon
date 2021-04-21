import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Cart from './components/Cart/Cart';
import Navheader from './components/Home/Header/Navheader';
import { createContext, useState } from 'react';
import FoodDetails from './components/Home/Food/FoodDetails';
export const UserContex = createContext()
function App() {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState({})
  
  return (
    <UserContex.Provider
      value={[cart, setCart, user, setUser]}>
        <Router>
          <Navheader/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/cart">
              <Cart/>
          </Route>
          <Route path="/food/:foodKey">
            <FoodDetails/>
          </Route>
          </Switch>
        </Router>
    </UserContex.Provider>
  );
}

export default App;
