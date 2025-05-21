import React from "react"
import HeaderDois from '../../components/headerdois/headerdois.jsx'
import { titulo, doistextos, textYellow, image, imageconf, inputOne, inputTwo, esquecerSenha, esquecerSenhaLeft, esquecerSenhaRight, divBtn, leftMain, rightMain, Main, textoBranco, ptextoBranco } from "./Login.module.css";
import InputText from '../../components/InputText/InputText'
import User from '../../assets/icons/iconUser.svg?react'
import Senha from '../../assets/icons/icon_senha.svg?react'
import Button from '../../components/Button/Button.jsx'

function Login() {
    return (
        <>
            <HeaderDois></HeaderDois>
            <div className={Main}>
                <div className={leftMain}>
                    <div className={titulo}>
                        <h1>Entre e tenha acesso completo à plataforma
                        </h1>
                    </div>
                    <div className={doistextos}>
                        <p>Não possui uma conta ?</p>
                        <p className={textYellow}>Cadastre-se aqui!</p>
                    </div>
                    <div className={image}>

                        <img src="/src/assets/newimglogin.svg" className={imageconf} />
                    </div>
                </div>
                <div className={rightMain}>
                    <div className={ptextoBranco}>
                        <p className={textoBranco}>Login</p>
                    </div>

                    <div className={inputOne}>

                        <InputText icon={<User></User>} placeholder="Login" />
                    </div>
                    <div className={inputTwo}>
                        <InputText icon={<Senha></Senha>} placeholder="Senha" /></div>
                    <div className={esquecerSenha}>
                        <div className={esquecerSenhaLeft}>

                        </div>
                        <div className={esquecerSenhaRight}>
                            <p className={textYellow}>Esqueci a senha</p>
                        </div>
                    </div>
                    <div className={divBtn}>
                        <Button to="/tipocadastro" text="Login" variante="btn" />
                    </div>
                </div>
            </div>
        </>
    )

}
export default Login