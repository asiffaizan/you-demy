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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


function App() {

  return (
    <div className='text-black'>
      <Nav />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='courses' element={<Courses />} />
            <Route path='overview' element={<Overview />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
