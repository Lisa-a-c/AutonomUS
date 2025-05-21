import { link, icon_style } from "./Link.module.css"
import { useNavigate } from "react-router-dom"

function Link({ children, icon, to }) {

    const navigate = useNavigate();
  
    const linkClick = () => {
      if (to) {
        navigate(to); 
      }
    };

    return (
        <a onClick={linkClick} className={link}>
            {/* <span className={icon_style}>{icon}</span> */}
            { children }
        </a>    
    )
}

export default Link