import React, { ReactNode, useState } from 'react';

export const LocationContext = React.createContext({
  locationData: { latitude: 0, longitude: 0 },
  setLocationData: (val: { latitude: number, longitude: number }) => { },
});

export default function LocationDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState({ latitude: 0, longitude: 0 });

  function setLocationData(value: { latitude: number, longitude: number }) {
    setData(value);
  }

  return (
    <LocationContext.Provider
      value={{
        locationData: data,
        setLocationData,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
