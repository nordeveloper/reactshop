import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './Home';
import Catalog from './Catalog';
import Product from './Product';
import Basket from './Basket';
import Login from './Login';
import Register from './Register';
import Search from './Search'

// function Child() {
//   let { id } = useParams();
// }children={<Child />}

const Main = () => (
  <div className="content">
    <div className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={Search}/>
      <Route path='/catalog' component={Catalog}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/basket' component={Basket}/>
      <Route path='/product/:id'  component={Product}/>
    </Switch>
    </div>
  </div>
)

export default Main;
