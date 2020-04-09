import React, { useCallback, useState } from 'react';
import FormContext from './FormContext';

export default function Form({ children }) {

  const [inputs, setInputs] = useState([]);

   //Registrando Inputs
  const registerField = useCallback((name, ref) => {
    setInputs(onldInputs => [...onldInputs, { name, ref }] );
  }, []);
  //ref- referência p/ aquele campo na DOM
  //[...inputs, { name, ref }] - adicionando novo imput

  return (
    <form>
      <FormContext.Provider value={{ registerField }} >
        { children }
      </FormContext.Provider>
    </form>
  );
}

/*
<FormContext.Provider value={{ registerField }} > - Com isso a função
registerField fica disponível(acessível) para todos os childrens (todos os inputs)

useCallback() - Memoriza a declaração de uma função e só altera a mesma quando
for necessário/ Nesse caso ele ta evitando renderizações desnecessárias

setInputs(onldInputs => [...onldInputs, { name, ref }] ); - Setando um estado
recebendo uma função e recebendo o valor anterior do estado dentro do parâmetro
oldInputs

onldInputs - Estado anterior

[...onldInputs, { name, ref }] - Pegando os inputs anteriores e cadastrando um novo
*/
