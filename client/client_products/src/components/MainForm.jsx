import React, { useState } from 'react'
import axios from "axios"

import { Routes, Route, Link } from 'react-router-dom';

const MainForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(5)
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`,
            { title: title, price: price, description: description })
            .then(res => {
                const latestProduct = res.data
                props.onCreate(latestProduct)
                setTitle("")
                setPrice(5)
                setDescription("")
                
            })
            .catch(err => console.log(err))

    }


    return (
        <div>
            <div>
                <Link to="/">Dashboard</Link>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type='text' name='title' value={title}
                            onChange={e => setTitle(e.target.value)} />
                        <label>Price</label>
                        <input type='number' name='price' value={price}
                            onChange={e => setPrice(e.target.value)} />
                        <label>Description</label>
                        <input type='text' name='description' value={description}
                            onChange={e => setDescription(e.target.value)} />
                        <button type='submit'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MainForm