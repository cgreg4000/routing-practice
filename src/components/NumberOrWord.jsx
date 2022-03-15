import React from "react";
import { useParams } from "react-router-dom";

const NumberOrWord = () => {
    const { input, wordColor, bgColor } = useParams();

    return (
        <>
            {
                isNaN(input) ? <div style={{ backgroundColor: bgColor }}>
                    <h1>The word is: <span style={{ color: wordColor }}>{input}</span></h1>
                </div> :
                    <h1>The number is: {input}</h1>
            }
        </>
    );
}

export default NumberOrWord;