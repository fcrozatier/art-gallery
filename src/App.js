import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useState } from 'react';
import { Nav } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Item from './pages/Item';
import Shop from './pages/Shop';

import paintings from './Data';

function App() {
  const [cart, setCart] = useState([]);

  const findItem = (id) => paintings.find((painting) => painting.id === +id);

  const addItem = (id) => {
    const painting = findItem(id);
    const inCart = cart.find((item) => item.id === +id);

    if (inCart) {
      setCart(
        [...cart].map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)),
      );
    } else {
      setCart([...cart, { ...painting, qty: 1 }]);
    }
  };

  const itemsQty = () => cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Router basename="/art-gallery">
        <Nav itemsQty={itemsQty()} />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/shop" exact>
            <Shop paintings={paintings} />
          </Route>
          <Route
            path="/shop/:id"
            exact
            component={({ match }) => (
              <Item painting={findItem(match.params.id)} addItem={addItem} />
            )}
          />
          <Route path="/cart" exact>
            <Cart cart={cart} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
