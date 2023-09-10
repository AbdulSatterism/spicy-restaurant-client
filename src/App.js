import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      < HelmetProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </HelmetProvider>
    </div>

  );
}

export default App;
