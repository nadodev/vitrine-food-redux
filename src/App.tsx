import './App.css'

import { Provider } from "react-redux"
import { store } from './redux/store'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { Footer } from './components/Footer'
import { useState } from 'react'
import { Cart } from './components/Cart'

const App = () => {

  const [showCart , setShowCart] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: '/product/:productID',
      element: <Product />
    }
  ]);

  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart}/> 
        {
          showCart && <Cart setShowCart={setShowCart}/>
        }
        <RouterProvider router={router} />
        <Footer/> 
        <Toaster position='bottom-right' reverseOrder={false}/>
      </Provider>
    </div>
  )
}

export default App
