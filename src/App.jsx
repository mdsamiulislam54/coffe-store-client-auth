
import './App.css'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import FollowUs from './components/FollowUs/FollowUs'
import Products from './components/Products/Products'
import Service from './components/Service/Service'

function App() {


  return (
    <>
     <Banner/>
     <Service/>
     {/* <Products/> */}
     <FollowUs/>
     <Contact/>
    </>
  )
}

export default App
