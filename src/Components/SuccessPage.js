import React from "react"


function SuccessPage(props) {
    const {postRes, setPostRes} = props

    return(
        <>
       
        <div>
            <h1 data-cy = "success">Congrats! Pizza is on its way.</h1>
            <p>Name: {postRes.name}</p>
            <p>Size: {postRes.size}</p>
            <p>Toppings:</p>
                <ul>
                    {postRes.extraCheese ? <li>Extra Cheese</li> : null }
                    {postRes.birthdayCake ? <li>A whole birthday cake</li> : null }
                    {postRes.sawdust ? <li>Sawdust</li> : null }
                    {postRes.gummyWorms ? <li>Gummyworms</li> : null }
                </ul> 
            <p>Special Instructions: {postRes.instructions}</p>
        </div>
        </>
    )
}

export default SuccessPage