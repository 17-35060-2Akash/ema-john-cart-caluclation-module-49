import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About/About';
import Inventory from '../components/Inventory/Inventory';
import Orders from '../components/Orders/Orders';
import Main from '../layouts/Main';
import Shop from '../components/Shop/Shop';
import { productsAndCartLoader } from '../loaders/productsAndCartLoader';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => fetch('products.json'),
                element: <Shop></Shop>
            },
            {
                path: '/orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },

]);