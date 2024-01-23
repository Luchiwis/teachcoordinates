import { useState, useEffect } from "react"
import { randColor } from "/src/logic/randColor"

export function Cell({children, x, y}){
    const [color, setColor] = useState('black')
    
    const handleClick  = () => {
        setColor(randColor)
    }

    return (
        <div onClick={handleClick} style={{backgroundColor: color}}>
            {children}
        </div>
    )
}

export function Grid() {
    // 10x10
    const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(null)))
    console.log(grid)
    return (
        <>
            <div className="grid">
                {
                    grid.map((row, rindex) => {
                        return row.map((cell, cindex) => {
                            return (
                                <Cell key={rindex+cindex} x={rindex} y={cindex}>{rindex+"-"+cindex}</Cell>
                            )
                        })
                    })
                }
            </div>
        </>
    )
}