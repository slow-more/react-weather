import { useState } from "react"

const Form = ()=>{
    const [city, setCity] = useState<String>()

    const getWeather = (e:any)=>{
        e.preventDefault()
        fetch(`https://api.weatherapi.com/v1/current.json?key=446901a7634b495b9e5123329241810&q=London&aqi=no`)
        .then(data => data.json())
        .then(data => console.log(data))
    }

    
    return (
        <form>
            <input type="text" name="city" onChange={e => setCity(e.target.value)} placeholder="都市名を入れてね"/>
            {city}
            <button type="submit" onClick={getWeather}>天気情報を取得</button>
        </form>
    )
}
export default Form;