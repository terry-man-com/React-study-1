import { useState, useEffect } from "react";

function Display(props) {
    const [text, setText] = useState("...loading...");

    useEffect(() => {
        setTimeout(() => {
            setText(`カウント: ${props.count}`)
        },2000);
        },[]);
        
    return (
        <div>
            カウント：{text}
        </div>
    )
}

export default Display;