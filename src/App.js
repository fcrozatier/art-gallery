import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Item from './pages/Item';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/item" exact component={Item} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
