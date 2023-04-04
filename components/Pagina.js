import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';


const Pagina = (props) => {
  console.log(props)
  return (
    <>
      <Cabecalho></Cabecalho>

      <div className=" bg-secondary text-white py-3 text-center mb-3" >
         <h1>{props.titulo}</h1>
      </div>
       {props.children}
      <Rodape></Rodape>

    </>
  )
}

export default Pagina