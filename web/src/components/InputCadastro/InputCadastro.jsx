import {container, input} from "./InputCadastro.module.css"

function InputText({placeholder, tipo}){
    return(
        <div className={container} >
         
           <input className={input} type={tipo} placeholder={placeholder} />
        </div>
    )
}

export default InputText