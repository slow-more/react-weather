import { useState } from "react"
import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result'

const App = () => {

  type WeatherDataType = {
    country:string,
    cityName:string,
    temperature:string,
    conditionText:string,
    icon:string
  }

  const [city, setCity] = useState<String>("")

  const [weatherData, setWeatherData] = useState<WeatherDataType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWeather = (e:any)=>{
      e.preventDefault()
      fetch(`https://api.weatherapi.com/v1/current.json?key=446901a7634b495b9e5123329241810&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setWeatherData({
          country: data.location.country,
          cityName: data.location.region,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
  }

  return (
    <div>
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Result weatherData={weatherData}/>
    </div>
  )
}

export default App