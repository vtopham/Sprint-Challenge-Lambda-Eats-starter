import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: peachpuff;
    padding: 0 4%;

    nav {
        width: 20%;
        text-align: right;
        .link{
            text-decoration: none;
            color: black;
            border: 2px solid white;
            border-radius: 10 px;
            margin-left: 2%;
            padding: 1% 2%;

            &:hover {
                background: white;
            }
        }
    }

`
function Header(props) {
    return(
        <HeaderDiv>
            <h3>Lambda Eats</h3>
            <nav>
                <Link className = "link" to = "/">Home</Link>
                <Link className = "link" to = "/Pizza">Start An Order</Link>
            </nav>
        </HeaderDiv>
    )
}

export default Header