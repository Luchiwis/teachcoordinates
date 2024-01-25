import { randColor } from "/src/logic/randColor"
import { useContext } from "react"
import { GridContext } from "./ContextProvider"

export function Cell({children, color}){
    return (
        <div style={{backgroundColor: color}}>
            {children}
        </div>
    )
}

export function Grid() {
    // 10x10
    const [grid, setGrid] = useContext(GridContext)

    return (
        <>
            <div className="grid">
                {
                    grid.map((row, rindex) => {
                        return row.map((color, cindex) => {
                            return (
                                <Cell key={rindex+"-"+cindex} color={color}></Cell>
                            )
                        })
                    })
                }
            </div>
        </>
    )
}