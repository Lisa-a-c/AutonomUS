import { sessao2, texto, imagem } from "./AboutUs.module.css"


function AboutUs(){
    return(
        <>
        <div className={sessao2}>
            <div className={texto}>
                <h1>Sobre nós</h1>
            </div>
            <div className={imagem}>
                <img src="/src/assets/sobre-nos.png"/>
            </div>
        </div>
        </>
    )
}

export default AboutUs