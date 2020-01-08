import React from "react"
import "./box.css"

const Result = ({expression, answer})=>{
    return(
        <div className="box">
            <div className="text">
                {expression}
                {answer}
            </div>
        </div>
    )
}
export default Result;