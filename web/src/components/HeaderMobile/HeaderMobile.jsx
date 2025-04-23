import MenuIcon from "../../assets/icons/menu_hamburguer.svg?react"
import {container, logo} from "./HeaderMobile.module.css"



function HeaderMobile(){
    return(
        <div  className={container} >
            <MenuIcon/>
            <img src="/src/assets/LOGO.svg" alt="logo" className={logo}/>
            
        </div>
    )
}

export default HeaderMobile