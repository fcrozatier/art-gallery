import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Item from './pages/Item';
import Shop from './pages/Shop';

import paintings from './Data';

function App() {
  const cart = [paintings[0], paintings[1]];

  const findItem = (id) => paintings.find((painting) => painting.id === +id);

  return (
    <>
      <Router basename="/art-gallery">
        <Nav />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/shop" exact>
            <Shop paintings={paintings} />
          </Route>
          <Route path="/cart" exact>
            <Cart cart={cart} />
          </Route>
          <Route
            path="/shop/:id"
            exact
            component={({ match }) => (
              <Item painting={findItem(match.params.id)} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
