import { useState } from "react"

const Form = ()=>{
    const [city, setCity] = useState("")

    return (
        <form>
            <input type="text" name="city" onChange={e => setCity(e.target.value)} placeholder="都市名を入れてね"/>
            {city}
            <button type="submit">天気情報を取得</button>
        </form>
    )
}
export default Form;