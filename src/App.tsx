import './App.css'

import { Provider } from "react-redux"
import { store } from './redux/store'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Feature } from './components/Feature'

const App = () => {
    return (
        <div>
            <Provider store={store}>
                  <Navbar/> 
                  <Hero/>
                  <Feature/>
            </Provider>
        </div>
    )
}

export default App
