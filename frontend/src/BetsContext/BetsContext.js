import React, {useState, createContext } from "react";

export const BetsContext = createContext();

export const BetsContextProvider = props => {
    const [bets, setBets] = useState([])

    return (
        <BetsContext.Provider value={{bets, setBets}}>
            {props.children}
        </BetsContext.Provider>
    )
}
