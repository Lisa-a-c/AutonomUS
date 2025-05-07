import './App.css'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero'
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import { useMediaQuery } from "@uidotdev/usehooks"
import AboutUs from '../../components/AboutUs/AboutUs'
import HowItWorksOne from '../../components/HowItWorksOne/HowItWorksOne'


function App() {

  const isMobile = useMediaQuery("only screen and (max-width:1024px)")

  return (
    <>
      {isMobile ? <HeaderMobile/> : <Header/>}
      <Hero/>
      <AboutUs/>
      <HowItWorksOne/>
    </>
  )
}

export default App
