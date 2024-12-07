import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import FlashDeals from '../FlashDeals';
import NewProducts from '../NewProducts';
import NotFound from '../NotFound';
import Reviews from '../Reviews';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import AddProduct from '../AddProduct'
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/flash-deals', element:<FlashDeals />},
    { path: '/new-products', element: <NewProducts />},
    { path: '/*', element: <NotFound />},
    { path: '/reviews', element: <Reviews />},
    { path: '/Sign-in', element: <Signin />},
    { path: '/AddProduct', element: <AddProduct/>}
])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
