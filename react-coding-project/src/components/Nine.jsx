// create button and click the button to change the background color blue of web page

import React, { useEffect, useState } from "react";


function Nine(){
    const [bgColor, setBgColor] = useState('')

    useEffect(()=>{
        document.body.style.backgroundColor = bgColor;
    }, [bgColor])

    const changeBgColor = ()=>{
        setBgColor('blue')
    }

    return(
        <>
        <button onClick={changeBgColor}>Change the Web Page Color </button>
        </>
    )
}

export default Nine