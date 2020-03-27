import React from "react"
import Header from "./Header"

function PizzaForm(props) {
    return (
        <>
        <Header/>
        <h1> Let's order a pizza.</h1>
        <form>
            <label htmlFor = "name">Name: </label>
            <input type = "text" name = "name" id = "name"/>
            <br/>

            <label htmlFor = "size">Size: </label>
            <select name = "size" id = "size">
                <option value = "10 inch">10"</option>
                <option value = "150 inch">150"</option>
            </select>
            <br/>

            <p>Toppings</p>
            <div class = "toppings">
                <input type = "checkbox" name = "extraCheese"id = "extraCheese"/>
                <label htmlFor = "extraCheese">Extra cheese</label>

                <input type = "checkbox" name = "gummyWorms"id = "gummyWorms"/>
                <label htmlFor = "gummyWorms">Gummy worms</label>

                <input type = "checkbox" name = "birthdayCake"id = "birthdayCake"/>
                <label htmlFor = "birthdayCake">A whole birthday cake</label>

                <input type = "checkbox" name = "sawdust"id = "sawdust"/>
                <label htmlFor = "sawdust">Sawdust</label>
            </div>

            <label htmlFor = "instructions">Special Instructions</label> <br/>
            <textarea name = "instructions" id = "instructions" rows = "4" cols = "50"/>
        </form>
        </>
    )
}

export default PizzaForm