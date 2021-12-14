import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewsPage from '../pages/News';
import RosterPage from '../pages/Roster';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/news' component={NewsPage}></Route>
      <Route exact path='/roster' component={RosterPage}></Route>
    </Routes>
  );
}

export default Main;