import { btn, outroBtn } from "./Button.module.css"

/* const props = {
    text: "Quero ser profissional"
}

console.log(props.text)

const { text } = props

console.log(text)
 */


     function Button({text, variante}){
        return (
            <button className={variante === 'outroBtn' ? outroBtn : btn}>
                {text}
            </button> 
        )
    }  


/* 
function Button({text}){
    return(
        <button className={btn}>{text}</button>
    )
}  */ 

export default Button