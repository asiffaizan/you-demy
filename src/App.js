import React from 'react';

import Nav from './components/Nav/Nav';
import Hero from './components/hero/Hero';
import Courses from './components/courses/Courses';
import Overview from './components/overview/Overview';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {

  return (
    <div className='text-black'>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='courses' element={<Courses />} />
          <Route path='overview' element={<Overview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
