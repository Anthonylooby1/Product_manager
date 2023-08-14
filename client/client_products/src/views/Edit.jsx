import React, {useState, useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom';

const Edit = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(5)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()


    const {id} = useParams()

    const handleDelete = ()=> {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=> navigate('/'))
        .catch(err=>console.log(err))
    }


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log(res.data)
            const product = res.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch(err=>console.log(err))
    }, [])

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/products/${id}`,
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
                <button type='button' onClick={handleDelete}>Delete</button>         
            </div>
        </form>
        
    </div>
  )
}

export default Edit