import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom';

const View = () => {
    const [product, setProduct] = useState()
    const {id} = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    }, [])
  return (
    <div>
        <Link to="/">Dashboard</Link>
        {
            product?
        <div>

            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <h2>{product.description}</h2>
            <Link to={`/edit/${id}`}>Edit</Link>
        </div>:
        <h1>Loading...</h1>
        }
    </div>
  )
}

export default View