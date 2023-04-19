import React, { useState, useContext, createContext } from 'react';

export const Context = createContext({
  traslate: true,
  setTraslate: () => {},
});

const ContextProvider = ({ children }) => {
  const [traslate, setTraslate] = useState(true);

  return (
    <Context.Provider
      value={{
        traslate,
        setTraslate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);

export default ContextProvider;
