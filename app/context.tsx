import React, { ReactNode, useState } from 'react';

export const SharedContext = React.createContext({
  sharedData: { latitude: 0, longitude: 0 },
  setSharedData: (val: { latitude: number, longitude: number }) => { },
});

export default function SharedDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState({ latitude: 0, longitude: 0 });

  function setSharedData(value: { latitude: number, longitude: number }) {
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
