import { useState } from "react"
import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result'

const App = () => {
  const [city, setCity] = useState<String>("")

  const getWeather = (e:any)=>{
      e.preventDefault()
      fetch(`https://api.weatherapi.com/v1/current.json?key=446901a7634b495b9e5123329241810&q=London&aqi=no`)
      .then(data => data.json())
      .then(data => console.log(data))
  }

  return (
    <div>
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Result/>
    </div>
  )
}

export default App