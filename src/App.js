import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';
// import Item from './pages/Item';
import Shop from './pages/Shop';

import paintings from './Data';

function App() {
  const cart = [paintings[0], paintings[1]];

  return (
    <>
      <Router basename="/">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact>
            <Shop paintings={paintings} />
          </Route>
          <Route path="/cart" exact>
            <Cart cart={cart} />
          </Route>
          {/* <Route path="/shop/:id" exact>
            <Item paintings={paintings} />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
