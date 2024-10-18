type FormProps = {
    setCity: React.Dispatch<React.SetStateAction<String>>
    getWeather: (e:any) => void
}

const Form = (props: FormProps)=>{
    return (
        <form>
            <input type="text" name="city" onChange={e => props.setCity(e.target.value)} placeholder="都市名を入れてね"/>
            <button type="submit" onClick={props.getWeather}>天気情報を取得</button>
        </form>
    )
}
export default Form;