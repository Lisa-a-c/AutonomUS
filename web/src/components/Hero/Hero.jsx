import {sessao1, banner_sessao1, caixa1, caixa2, glass, texto_inicial } from "./Hero.module.css"
import Button from "../Button"

function Hero(){    
    return(
        <>
        <div className={sessao1}>
            <div className={banner_sessao1}>
                <div className={caixa1}>
                    <div className={texto_inicial}>
                        <h1>AUTONOM<span>US</span></h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptatem provident quia dolores possimus illo minima nemo, cupiditate assumenda in harum similique asperiores dolor officiis est corrupti amet, esse tempora?</p>
                        <Button text="Começe agora" variante="outroBtn" />
                    </div>
                </div>
                <div className={caixa2}>
                    <div className={glass}>
                        <h2><span>Contrate um profissional</span> em apenas 3 Passos Simples!</h2>
                        <ol>
                            <li>Escolha um profissional</li>
                            <li>Contate-o com segurança</li>
                            <li>Receba o serviço</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </>
    )



}

export default Hero