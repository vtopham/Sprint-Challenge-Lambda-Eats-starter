import React, {useState} from "react"
import {Link} from "react-router-dom"
import Header from "./Header"
import styled from "styled-components"
import * as yup from "yup"
import axios from "axios"



const Submit = styled.button`
    height: 50px;
    width: 70px;
    border-radius: 10px;

    background: red;
    border: 1px solid red;

    &:hover {
        background: white;
        * {
            color: red;
        }
    }

    * {
        height: 100%;
        width: 100%;
        font-size: 16px;
        text-decoration: none;

        color: white;


    

    }
    


`

const ErrorMessage = styled.p`
    color: red;
`

const OrderMessage = styled.div`


`

function PizzaForm(props) {

    const {postRes, setPostRes} = props

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

        axios.post("https://reqres.in/api/users",formInput)
        .then(res => {
            setPostRes(res.data)
            console.log(res.data)
            setFormInput({
                name: "",
                size: "10 inches",
                extraCheese: false,
                gummyWorms: false,
                birthdayCake: false,
                sawdust: false,
                instructions: ""
            })
        })

    }

    //VALIDATION SCHEMA & FUNCTION

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, "Your name must be at least two characters."),
    })

    const validateInput = (event) => {
        if (event.target.name === "name"){
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
    }
    
    return (
        <>
        <Header/>
        <h1> Let's order a pizza.</h1>
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name: </label>
            <input onChange = {inputChange} type = "text" name = "name" id = "name" value = {formInput.name} data-cy = "name"/>
            {err.name.length > 0 ? <ErrorMessage>{err.name}</ErrorMessage> : <br/>}

            <label htmlFor = "size">Size: </label>
            <select onChange = {inputChange} name = "size" id = "size" value = {formInput.size} data-cy = "size">
                <option value = "10 inch">10"</option>
                <option value = "150 inch">150"</option>
            </select>
            <br/>

            <p>Toppings</p>
            <div className = "toppings">
                <input onChange = {inputChange} type = "checkbox" name = "extraCheese"id = "extraCheese" checked = {formInput.extraCheese} data-cy = "extraCheese"  />
                <label htmlFor = "extraCheese">Extra cheese</label>

                <input onChange = {inputChange} type = "checkbox" name = "gummyWorms"id = "gummyWorms" checked = {formInput.gummyWorms} data-cy = "gummyWorms"/>
                <label htmlFor = "gummyWorms">Gummy worms</label>

                <input onChange = {inputChange} type = "checkbox" name = "birthdayCake"id = "birthdayCake" checked = {formInput.birthdayCake} data-cy = "birthdayCake" />
                <label htmlFor = "birthdayCake">A whole birthday cake</label>

                <input onChange = {inputChange} type = "checkbox" name = "sawdust"id = "sawdust" checked = {formInput.sawdust} data-cy = "sawdust"/>
                <label htmlFor = "sawdust">Sawdust</label>
            </div>

            <label htmlFor = "instructions">Special Instructions</label> <br/>
            <textarea onChange = {inputChange} name = "instructions" id = "instructions" rows = "4" cols = "50" value = {formInput.instructions} data-cy = "instructions"/>
            <br/>
            
            <Submit data-cy = "submit">
                <Link to = "/pizza/success">Submit</Link>
            </Submit>
        </form>

        {postRes === "" ? null : 
        <div>
            <h1 data-cy = "success">Your order was successfully placed!</h1>
            <p>Name: {postRes.name}</p>
            <p>Size: {postRes.size}</p>
            <p>Toppings:</p>
                <ul>
                    {postRes.extraCheese ? <li>Extra Cheese</li> : null }
                    {postRes.birthdayCake ? <li>A whole birthday cake</li> : null }
                    {postRes.sawdust ? <li>Sawdust</li> : null }
                    {postRes.gummyWorms ? <li>Gummyworms</li> : null }
                </ul> 
            <p>Soecial Instructions: {postRes.instructions}</p>
        </div>}
        </>
    )
}

export default PizzaForm