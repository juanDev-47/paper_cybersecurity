import React, { useState, useContext, createContext } from 'react';

export const Context = createContext({
  traslate: false,
  setTraslate: () => {},
});

const ContextProvider = ({ children }) => {
  const [traslate, setTraslate] = useState(false);

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
