import { createContext, FC, useContext, useMemo, useState } from 'react';
import { AppContext, UseContext, FormData } from '../models';

interface props {
    children: JSX.Element | JSX.Element[]
}

const Context = createContext<null | AppContext>(null)

export const useAppContext: UseContext = () => useContext(Context)

export const ContextProvider = ({ children }:props) => {
  const { Provider } = Context;
  const [formData, setFormData] = useState<FormData>({});

  const context ={
    setFormData,
    formData
  }
  return (
    <Provider value={context} >{children}</Provider>
  )
}