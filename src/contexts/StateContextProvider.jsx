/* eslint-disable react-refresh/only-export-components */
import  { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-image-search5.p.rapidapi.com/search';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('JS Mastery');

  const getResults = async (url) => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'google-image-search5.p.rapidapi.com'
      },
    });

    const data = await res.json();


    if(url.includes('/news'))
    {
      setResults(data.entries)
    }
    else if(url.includes('/images'))
    {
      setResults(data.image_results)
    }
    else{
      setResults(data.results)
    }
    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);