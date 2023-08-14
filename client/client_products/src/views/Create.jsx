import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(5)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`,
        {title: title, price: price, description: description})
        .then(res=>{
            navigate('/')
        })
        .catch(err=>console.log(err))

    }


  return (
    <div>
        <Link to="/">Dashboard</Link>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='text' name='title' value={title}
                    onChange={e=>setTitle(e.target.value)} />
                <label>Price</label>
                <input type='number' name='price' value={price}
                    onChange={e=>setPrice(e.target.value)} />
                <label>Description</label>
                <input type='text' name='description' value={description}
                    onChange={e=>setDescription(e.target.value)} />   
                <button type='submit'>Add</button>         
            </div>
        </form>
    </div>
  )
}

export default Create