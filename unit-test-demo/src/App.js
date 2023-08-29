/* eslint-disable no-unused-vars */
import { React,  Suspense, lazy } from 'react'
import './App.css';
import Loader from 'Components/Loader';

function App() {
  const AllRoutes = lazy(() => import('Routes/index'))
  return (
    <Suspense fallback={<Loader />}>
    <AllRoutes />
  </Suspense>
    
  );
}

export default App;
