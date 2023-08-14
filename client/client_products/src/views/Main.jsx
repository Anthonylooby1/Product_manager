import React, {useState, useEffect} from 'react'
import MainDashboard from '../components/MainDashboard'
import MainForm from '../components/MainForm'
import axios from 'axios'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const Main = () => {
    const [productList, setProductList] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products`)
        .then(res=>setProductList(res.data))
        .catch(err=>console.log(err))
    },[])

    //creating new item on list
    const newProductList = (newProduct)=> {
        setProductList([...productList, newProduct])
    }

    //deleting item from list
    const deleteProduct = (deleteId) => {
        const removingItem = productList.filter((eachProduct)=> eachProduct._id !== deleteId)
        setProductList(removingItem)
    }
  return (
    <div>
        <MainForm onCreate = {newProductList}/>
        <MainDashboard productList = {productList} deleteItem = {deleteProduct}/>
    </div>
  )
}

export default Main