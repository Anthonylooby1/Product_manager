import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const [productList, setProductList] = useState([])

    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products`)
        .then(res=>setProductList(res.data))
        .catch(err=>console.log(err))
    },[])

    const handleDelete = (deleteId)=> {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(res=> {
            removeFromDom(deleteId)
        })
        .catch(err=>console.log(err))
    }

        const removeFromDom = (deleteId)=> {
            const filterList = productList.filter((eachProduct,idx) => eachProduct._id !== deleteId )
            setProductList(filterList)
        }
    
  return (
    <div>
        {productList.map((eachProduct, idx) => {
            return (
                <div>
                    
                    {/* <h3>{eachProduct.title}</h3> */}
                    <Link to={`/view/${eachProduct._id}`}>{eachProduct.title}</Link>
                    <button type='button' onClick={()=>handleDelete(eachProduct._id)}>Delete</button>

                </div>
            )
        })}
    </div>
  )
}

export default Dashboard