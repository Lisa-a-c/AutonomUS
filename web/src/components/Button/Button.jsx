import { useNavigate } from 'react-router-dom'
import { btn, outroBtn } from "./Button.module.css"


/* const props = {
    text: "Quero ser profissional"
}

console.log(props.text)

const { text } = props

console.log(text)
 */


function Button({ text, variante, to }) {
    const navigate = useNavigate();
  
    const buttonClick = () => {
      if (to) {
        navigate(to); 
      }
    };
  
    return (
      <button onClick={buttonClick} className={variante === 'outroBtn' ? outroBtn : btn}>
        {text}
      </button> 
    );
  }

/* 
function Button({text}){
    return(
        <button className={btn}>{text}</button>
    )
}  */ 

export default Button

