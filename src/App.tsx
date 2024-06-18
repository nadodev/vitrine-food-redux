import './App.css'

import { Provider } from "react-redux"
import { store } from './redux/store'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Product } from './pages/Product'

const App = () => {
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
        <Navbar/> 
        <RouterProvider router={router} />
        <Toaster position='top-right' reverseOrder={false}/>
      </Provider>
    </div>
  )
}

export default App
