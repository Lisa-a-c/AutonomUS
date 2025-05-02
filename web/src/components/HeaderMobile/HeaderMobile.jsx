import MenuIcon from "../../assets/icons/menu_hamburguer.svg?react"
import {container, logo, icon_hamburguer} from "./HeaderMobile.module.css"



function HeaderMobile(){
    return(
        <div  className={container} >
            <MenuIcon className={icon_hamburguer}/>
            <img src="/src/assets/LOGO.svg" alt="logo" className={logo}/>
            
        </div>
    )
}

export default HeaderMobile