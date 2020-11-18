import React from "react";
import { useState } from "react";

let baseUrl = "fakeapi";

export const Todos = () => {
    let [ data, setData ] = useState([]);

    const addTodoHandler = () => {
        fetch(`/${baseUrl}/addTodos`, {
            method: 'POST',
            body: {id: 3742, text: "Hello From Rooshan"}
        }).then(res => {
            console.log('success',res)
        }).catch(error => {
            console.log('failed',error)
        })
    }

    const getDataHandler = () => {
        fetch(`/${baseUrl}/getTodos`)
        .then((res) => res.json())
        .then((data) => {
            setData(data.todos)
            console.log("data", data)
        });
    }

    return(
        <div>
            <h1>Hello From Todos</h1>
            <button onClick={addTodoHandler}>Add</button>
            <button onClick={getDataHandler}>Get Todos</button>
            <br />
            {
                JSON.stringify(data)
            }
        </div>
    )
};
