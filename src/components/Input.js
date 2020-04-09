import React, { useContext, useEffect, useRef } from 'react';
import FormContext from './FormContext';

export default function Input({ name }) {

  const inputRef = useRef();
  const { registerField } = useContext(FormContext);

  useEffect(() => {
    if(inputRef.current){
      registerField(name, inputRef.current);
    }
  }, []);

  return (
    <input name={name} ref={inputRef} />
  );
}

/*
const inputRef = useRef(); - Pega a referência do input na DOM
const { registerField } = useContext(FormContext); - Pegando a 
função que foi passada pelo contexto
registerField(name, inputRef.current); - Vai registrar 
o input quando o componente Input for renderizado na tela
if(inputRef.current) - Verifica se o input já tem referência na DOM, ou seja,
se ele já foi renderizado na tela. 
*/
