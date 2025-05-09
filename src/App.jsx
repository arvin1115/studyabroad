import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationWrapper from './components/NavigationWrapper';
import AppRoutes from './routes';
import Footer from './components/footer';

const App = () => (
  <BrowserRouter>
    {/* Navigation */}
    <NavigationWrapper />

    {/* Main Content */}
    <AppRoutes />

    {/* Footer */}
    <Footer />
  </BrowserRouter>
);

export default App;