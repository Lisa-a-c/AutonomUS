import React from "react"
import HeaderDois from '../../components/headerdois/headerdois.jsx'
import { Main, leftMain, titulo, doistextos, textYellow, image, imageconf, rightMain, InputOne, InputTwo, InputThree, InputFour, InputFive, InputSix, InputSeven, InputEight, RightInput, LeftInput } from "./CadastroProfissional.module.css";
import InputCadastro from '../../components/InputCadastro/InputCadastro.jsx'
function CadastroProfissional() {


    return (
        <>
            <HeaderDois></HeaderDois>
            <div className={Main}>
                <div className={leftMain}>
                    <div className={titulo}>
                        <h1>Cadastre-se para ultilizar todos os recursos
                        </h1>
                    </div>
                    <div className={doistextos}>
                        <p>Já possui uma conta ?</p>
                        <p className={textYellow}>Entre aqui!</p>
                    </div>
                    <div className={image}>
                        <img src="/src/assets/newimglogin.svg" className={imageconf} />
                    </div>
                </div>
                <div className={rightMain}>

                    <div className={InputOne}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                            <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>
                    <div className={InputTwo}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                             <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>
                    <div className={InputThree}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                             <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>
                    <div className={InputFour}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                             <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>
                    <div className={InputFive}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                             <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>
                    <div className={InputSix}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                             <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>
                    <div className={InputSeven}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                             <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>
                    <div className={InputEight}>
                        <div className={RightInput}>
                            <p>Primeiro Nome</p>
                             <InputCadastro tipo="text" placeholder="Primeiro nome" />
                        </div>
                        <div className={LeftInput}>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CadastroProfissional