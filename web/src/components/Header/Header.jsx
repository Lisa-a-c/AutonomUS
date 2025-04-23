import Link from "../Link"
import Button from "../Button"
import { header, logo, container, caixa1, caixa2 } from "./Header.module.css"
import LoginIcon from "../../assets/icons/iconUser.svg?react"
import FlechaIcon from "../../assets/icons/arrow_down.svg?react"
import BuscarIcon from "../../assets/icons/icon_buscar.svg?react"
import InputText from "../InputText/InputText"




function Header() {
    return (
        <header className={header}>
            <div className={container}>
                <div className={caixa1}>
                    <img src="/src/assets/Logo.svg" alt="logo" className={logo} />
                    <Link>Contato</Link>
                    <Link direcao="#sessao2">Saiba mais</Link>
                    <Link>Encontre profissionais<FlechaIcon/></Link>
                    <Link>Encontre trabalhos </Link>
                </div>
                <div className={caixa2}>
                    <InputText icon={<BuscarIcon/>} placeholder="pesquise uma categoria"/>
                    <Link><LoginIcon/>Entrar</Link>
                    <Button text="Cadastrar" variante="btn"/>
                </div>
            </div>
        </header>

    )
}
export default Header