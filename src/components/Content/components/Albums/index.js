
import axios from "axios";
import React, { useEffect, useState } from "react";

const Albums = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')

            .then(response => {
                setItems(response.data)
            })
    }, [])

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

export default Albums;