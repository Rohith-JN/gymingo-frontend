import React, { useState } from 'react';

export const SharedContext = React.createContext({
  sharedData: [],
  setSharedData: (val) => {},
});

export default function SharedDataProvider({ children }) {
  const [data, setData] = useState([]);

  function setSharedData(value) {
    setData(value);
  }

  return (
    <SharedContext.Provider
      value={{
        sharedData: data,
        setSharedData,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
}
