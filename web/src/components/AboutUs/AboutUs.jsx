import { sessao2, texto, imagem, titulo_mobile } from "./AboutUs.module.css"
import Button from "../Button"


function AboutUs(){
    return(
        <>
        <div className={sessao2}>

            <div className={texto}>
                <h1>Sobre nós</h1>
                <p>
                    Nossa plataforma foi desenvolvida para tornar mais simples e segura a contratação de profissionais para serviços diversos. A ideia surgiu a partir da necessidade de oferecer uma solução eficiente para quem busca praticidade no dia a dia, sem abrir mão da qualidade.
                    Em um único ambiente, é possível encontrar especialistas nas mais variadas áreas, prontos para atender com agilidade e responsabilidade. O processo é descomplicado: basta escolher o serviço, entrar em contato com o profissional e acompanhar a execução com tranquilidade.
                    A tecnologia é utilizada como ferramenta para aproximar pessoas, otimizar tempo e garantir uma experiência positiva em todas as etapas.
                </p>
                <Button text="Porque nos escolher?" variante="outroBtn"/>
            </div>
            <div className={imagem}>
                <h1 className={titulo_mobile}>Sobre nós</h1>
                <img src="/src/assets/sobre-nos.png"/>
            </div>
        </div>
        </>
    )
}

export default AboutUs