import { createRoot } from 'react-dom/client'
import 'tailwindcss'
import App from './App';
import Erorr from './Erorr';
import Ttt from './pages/ttt/Ttt';
import Memento from './pages/memento/Memento';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {path:'/',element: <App/>},
    {path:'*', element: <Erorr/>},
    {path:'/memento',element : <Memento/>},
    {path:'/ttt' , element: <Ttt/>}
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
