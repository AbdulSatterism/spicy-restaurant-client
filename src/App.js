import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      < HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>

          </RouterProvider>
        </QueryClientProvider>

      </HelmetProvider>
    </div>

  );
}

export default App;
