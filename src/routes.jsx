import React from 'react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Activities from './pages/Activities';
import Visitors from './pages/Visitors';
import BloodDonation from './pages/BloodDonation';
import Awareness from './pages/Awareness';
import About from './pages/About';
import Services from './pages/Services';
import Donations from './pages/Donations';

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/overview/*',
    element: <Overview />
  },
  {
    path: '/activities/*',
    element: <Activities />
  },
  {
    path: '/visitors/*',
    element: <Visitors />
  },
  {
    path: '/blood-donation/*',
    element: <BloodDonation />
  },
  {
    path: '/awareness/*',
    element: <Awareness />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/donations',
    element: <Donations />
  }
];