
import React from "react"


function WorkExperience({works, blur, bCircle}){
    return (
        <div className="workContainer">
            <h2>Working <br/> Experience</h2> 
            <div className="left r we-bg">
                <span className="circle-cont"><a className="circle-inner" id="circle-one" /></span>
                <span className="circle-cont-1" ><a className="circle-inner" id="circle-two" /></span>
                <span className="circle-cont-2" ><a className="circle-inner" id="circle-three" /></span>
            </div>
            <div className="right">
                <span src={works} alt='work experience'/>
            </div>
        </div>
    )
}

export {WorkExperience}