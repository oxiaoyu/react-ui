import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import '@/main.scss';
import Home from '@/views/Home';
import Kind from '@/views/Kind';
import Cart from '@/views/Cart';
import User from '@/views/User';

function App() {
  return (
    <div className = "container">
    <Switch>
      <Route path = "/home" component = { Home } />
      <Route path = "/kind" component = { Kind } />
      <Route path = "/cart" component = { Cart } />
      <Route path = "/user" component = { User } />
      <Redirect to = "/home" />
    </Switch>
      <footer className = "footer">
        <ul>
          <NavLink to = "/home" >首页</NavLink>
          <NavLink to = "/kind" >分类</NavLink>
          <NavLink to = "/cart" >购物车</NavLink>
          <NavLink to = "/user" >个人中心</NavLink>
        </ul>
      </footer>
    </div>
  );
}

export default App;
