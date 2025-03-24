import { useState } from "react"

export default function Batsman (){

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes]  = useState(0)
    const handleSingle=()=>{
        const updateRuns = runs + 1
        setRuns(updateRuns)
    }

    const handleFour=()=>{
        setRuns(runs+4)
    }

    const handleSix =()=>{
        const updateSix = runs + 6
        const updateSixes =sixes + 1;
        // setSixes = sixes +1;
        setSixes(updateSixes)
        setRuns(updateSix)
    }

    return(
        <div>
            <h3>player: bangla</h3>
            <p><small>six: {sixes}</small></p>
            {
                runs >30 && <p>your Score:30+</p>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}