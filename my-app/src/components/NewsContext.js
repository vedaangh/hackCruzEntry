import React,{createContext, useEffect, useState} from 'react'; 
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "66f4a3c0acd14474a69b1ef996bbe3d6";
    //useEffect only runs at a certain time
    useEffect(()=>{
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error)=> console.log(error));
    },[]);
    
    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    ); 
};
// https://newsapi.org/v2/top-headlines?country=us&apiKey=66f4a3c0acd14474a69b1ef996bbe3d6