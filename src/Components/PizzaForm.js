import React, {useState} from "react"
import Header from "./Header"







function PizzaForm(props) {
    const [formInput, setFormInput] = useState({
        name: "",
        size: "",
        extraCheese: false,
        gummyWorms: false,
        birthdayCake: false,
        sawdust: false,
        instructions: ""
    })

    const inputChange = (event) => {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })

    }

    return (
        <>
        <Header/>
        <h1> Let's order a pizza.</h1>
        <form>
            <label htmlFor = "name">Name: </label>
            <input onChange = {inputChange} type = "text" name = "name" id = "name" value = {formInput.name}/>
            <br/>

            <label htmlFor = "size">Size: </label>
            <select onChange = {inputChange} name = "size" id = "size" value = {formInput.size}>
                <option value = "10 inch">10"</option>
                <option value = "150 inch">150"</option>
            </select>
            <br/>

            <p>Toppings</p>
            <div class = "toppings">
                <input onChange = {inputChange} type = "checkbox" name = "extraCheese"id = "extraCheese" checked = {formInput.extraCheese}/>
                <label htmlFor = "extraCheese">Extra cheese</label>

                <input onChange = {inputChange} type = "checkbox" name = "gummyWorms"id = "gummyWorms" checked = {formInput.gummyWorms}/>
                <label htmlFor = "gummyWorms">Gummy worms</label>

                <input onChange = {inputChange} type = "checkbox" name = "birthdayCake"id = "birthdayCake" checked = {formInput.birthdayCake}/>
                <label htmlFor = "birthdayCake">A whole birthday cake</label>

                <input onChange = {inputChange} type = "checkbox" name = "sawdust"id = "sawdust" checked = {formInput.sawdust}/>
                <label htmlFor = "sawdust">Sawdust</label>
            </div>

            <label htmlFor = "instructions">Special Instructions</label> <br/>
            <textarea onChange = {inputChange} name = "instructions" id = "instructions" rows = "4" cols = "50" value = {formInput.instructions}/>
        </form>
        </>
    )
}

export default PizzaForm