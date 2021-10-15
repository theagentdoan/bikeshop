import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Nomatch from './components/Nomatch';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Header/>
    <Switch>
    <Route exact path="/">
    <Homepage/>
    </Route>
    {/* <Route exact path="/shop">
    <ShopMain/>
    </Route> */}
    <Route exact path={["/shop/:category","/shop"]}>
    <Shop/>
    </Route>
    <Route path="/detail/:id">
    <Detail/>
    </Route>
    <Route path="/cart">
    <Cart/>
    </Route>
    <Route path="/signin">
    <Signin/>
    </Route>
    <Route path="*">
    <Nomatch/>
    </Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
