import './App.css'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero'
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import { useMediaQuery } from "@uidotdev/usehooks"


function App() {

  const isMobile = useMediaQuery("only screen and (max-width:1024px)")

  return (
    <>
      {isMobile ? <HeaderMobile/> : <Header/>}
      <Hero/>
    </>
  )
}

export default App
