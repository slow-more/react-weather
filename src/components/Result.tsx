// todo:App.tsxにも書かれている型宣言は悪くないか？
type weatherDataProps = {
    weatherData: {
        country:string,
        cityName:string,
        temperature:string,
        conditionText:string,
        icon:string
    }
}

const Result = (props:weatherDataProps)=>{
    
    return (
        <div>
            {props.weatherData.country &&
            <div>
                <div>{props.weatherData.country}</div>
                <div>{props.weatherData.cityName}</div>
                <div>{props.weatherData.temperature}<span>℃</span></div>
                <div>
                    <img src={props.weatherData.icon} alt="icon"/>
                    <span>{props.weatherData.conditionText}</span>
                </div>
            </div> 
            }
        </div>
    )
}

export default Result