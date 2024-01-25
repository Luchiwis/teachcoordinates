import './SidePanel.css'
import { useContext, useState } from "react"
import { GridContext } from "./ContextProvider"
import { randColor } from '/src/logic/randColor.js'

export function NumberInput({...props}){
    return(
        <input type="number" {...props} />
    )
}

export function SidePanel() {
    const [grid, setGrid] = useContext(GridContext)
    const [newColor, setNewColor] = useState("transparent")

    const placeBlockHandler = (e) => {
        e.preventDefault()
        const newGrid = [...grid]
        const X = Number(e.target[1].value)
        const Y = Number(e.target[0].value)
        newGrid[X][Y] = newColor
        setGrid(newGrid)
        const randomColor = randColor()
        setNewColor(randomColor)
    }
    

    return (
        <div className='text-center side-panel'>
            <div>
                <h1> Next Color <div className='nextColor' style={{backgroundColor:newColor}}></div>
                </h1>
            </div>
            <form className="form-group" onSubmit={placeBlockHandler}>
                <label>
                    X: <NumberInput min="0" max="10" name='X' required />
                </label>
                <br />
                <label>
                    Y: <NumberInput min="0" max="10" name='Y' required />
                </label>
                <br />
                <button className="btn btn-primary mt-3">
                    Place block
                </button>
            </form>
        </div>
    )
}