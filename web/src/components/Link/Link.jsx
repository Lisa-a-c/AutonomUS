import { link, icon_style } from "./Link.module.css"

function Link({ children, icon }) {
    return (
        <a className={link}>
            {/* <span className={icon_style}>{icon}</span> */}
            { children }
        </a>    
    )
}

export default Link