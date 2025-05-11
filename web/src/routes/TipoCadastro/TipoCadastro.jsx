import React from "react"
import styles from "./TipCadastro.module.css";
import Button from '../../components/Button/Button.jsx'
import HeaderDois from '../../components/headerdois/headerdois.jsx'
import Card from '../../components/Card/card.jsx'



function TipoCadastro() {


  return (
    <>
      <HeaderDois />
      <div className={styles.BeforeMain}>
        <h2>Cadastre-se como cliente ou profissional</h2>
      </div>
      <div className={styles.DivMain}>
        <div className={styles.leftOne}></div>
        <div className={styles.leftTwo}>
          <Card></Card>
        </div>
        <div className={styles.rightOne}>
          <Card></Card>
        </div>
        <div className={styles.rightTwo}></div>
      </div>
      <div className={styles.divbotton}>
        <Button></Button>
      </div>
      <div className={styles.divtext}>
        <p>Já possui uma conta ?</p>
    
        <p className={styles.Pyellow}>Clique aqui</p>

      </div>
    </>
  )
}

export default TipoCadastro
