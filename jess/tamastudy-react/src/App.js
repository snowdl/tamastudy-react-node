import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tama from './pages/Tama';
import Header from './components/organisms/Header';
import Alert from './components/organisms/Alert';
import Footer from './components/organisms/Footer';
import Login from './pages/Login';
import GetPosts from './pages/Post/GetPosts';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogInFn = () => {
    try {
      localStorage.setItem('token', 'success login test ');
      setIsLoggedIn(true);
      alert('로그인 성공');
    } catch (error) {
      alert('로그인 실패');
    }
  };

  const handleLogOutFn = () => {
    try {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      alert('로그아웃 성공');
    } catch (error) {
      alert('로그인아웃 실패');
    }
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogOutFn={handleLogOutFn} />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tama" component={Tama} />
        <Route exact path="/login">
          <Login handleLogInFn={handleLogInFn} />
        </Route>
        <Route exact path="/posts" component={GetPosts} />
        <Redirect from="*" to="/login" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
