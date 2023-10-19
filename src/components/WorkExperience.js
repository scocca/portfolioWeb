function WorkExperience({works, blur, bCircle}){
    return (
        <div className="workContainer">
                <a id="circle-one" href="./assets/bigCircle.svg" className="circle-cont"/>
                <a id="circle-two" href="./assets/bigCircle.svg" className="circle-cont"/>
                <a id="circle-three" href="./assets/bigCircle.svg" className="circle-cont"/>
                <span src={works} alt='work experience'/>
        </div>
    )
}

export {WorkExperience}