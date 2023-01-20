//import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { useState } from 'react';

function App() {
  const [theme , setTheme] = useState('light')
  return (
    <div className={theme}>
       <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
