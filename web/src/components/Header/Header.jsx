import { header, logo, container, caixa1, caixa2 } from "./Header.module.css"


function Header(){
    return (
        <header className={header}>
            <div className={container}>
                <div className={caixa1}>
                    <img src="/src/assets/LOGO.svg" alt="logo" className={logo} />
                    <a>home</a>
                    <a>serviços</a>
                    <a>contato</a>
                    <a>feedbacks</a>
                </div>
                <div className={caixa2}>
                    <a>Login</a>
                </div> 
            </div>

        </header>
    )
}
export default Header