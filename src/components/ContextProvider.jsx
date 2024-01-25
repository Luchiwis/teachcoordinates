import { createContext } from 'react'
import { useState } from 'react'

export const GridContext = createContext(null)

export function ContextProvider({ children }) {
    const [grid, setGrid] = useState(
        [["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"]]
    )
    // TODO: FIX THIIIS

    return (
        <GridContext.Provider value={[grid, setGrid]}>
            {children}
        </GridContext.Provider>
    )
}