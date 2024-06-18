import './App.css'

import { Provider } from "react-redux"
import { store } from './redux/store'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Feature } from './components/Feature'
import { TrendingFood } from './components/TrendingFood'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar/> 
        <Hero/>
        <Feature/>
        <TrendingFood/>
      </Provider>
    </div>
  )
}

export default App
