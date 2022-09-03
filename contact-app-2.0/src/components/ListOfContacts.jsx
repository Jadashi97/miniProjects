import React, { useState } from "react";


function ListOfContacts(props){


    function handleClick(e){
        e.preventDefault();

        console.log("clicked!!");

        props.onDelete(props.id)

    }

    

    return(
        <div>
            <form action="">
                <p>{props.index}</p>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>{" "}
                <button onClick={handleClick}>delete</button>
            </form>
        </div>
    )
}

export default ListOfContacts;
