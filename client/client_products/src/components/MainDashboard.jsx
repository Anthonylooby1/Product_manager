import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const MainDashboard = (props) => {

    const handleDelete = (deleteId)=> {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(res => {
            props.deleteItem(deleteId)
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <div>
        {props.productList.map((eachProduct, idx) => {
            return (
                <div>
                    
                    {/* <h3>{eachProduct.title}</h3> */}
                    <Link to={`/view/${eachProduct._id}`}>{eachProduct.title}</Link>
                    <button type='button' onClick={()=>handleDelete(eachProduct._id)}>Delete</button>

                </div>
            )
        })}
    </div>
    </div>
  )
}

export default MainDashboard