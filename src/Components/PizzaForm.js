import React, {useState} from "react"
import Header from "./Header"
import styled from "styled-components"
import * as yup from "yup"



const Submit = styled.button`
    height: 50px;
    width: 70px;
    border-radius: 10px;

    font-size: 16px;

    color: white;
    background: red;
    border: 1px solid red;

    &:hover {
        background: white;
        color: red;
    }


`

const ErrorMessage = styled.p`
    color: red;

`

function PizzaForm(props) {

    //SET UP STATE
    const [formInput, setFormInput] = useState({
        name: "",
        size: "",
        extraCheese: false,
        gummyWorms: false,
        birthdayCake: false,
        sawdust: false,
        instructions: ""
    })

    const [err, setErr] = useState({
        name: ""
    })
    //UPDATE STATE WITH FORM INPUT
    const inputChange = (event) => {
        event.persist()
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
        validateInput(event)
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    //VALIDATION SCHEMA & FUNCTION

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, "Your name must be at least two characters.")
    })

    const validateInput = (event) => {
        yup
        .reach(validationSchema, event.target.name)
        .validate(event.target.value)
        .then( valid => {
            setErr({
                ...err,
                [event.target.name]: ""
            })
        })
        .catch (error => {
            setErr({
                ...err,
                [event.target.name]: error.errors[0]
            })
        });
    }
    
    return (
        <>
        <Header/>
        <h1> Let's order a pizza.</h1>
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name: </label>
            <input onChange = {inputChange} type = "text" name = "name" id = "name" value = {formInput.name}/>
            {err.name.length > 0 ? <ErrorMessage>{err.name}</ErrorMessage> : <br/>}

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
            <br/>
            
            <Submit>Submit</Submit>
        </form>
        </>
    )
}

export default PizzaForm