import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addProducts } from '../Services/allAPI';

function AddProducts() {
    const [products, setProducts] = useState({
        "productID":"" ,
        "name": "",
        "category": "",
        "image": "",
        "description": "",
        "price": ""
    })
    console.log(products);
    const handleClear = () => {
        setProducts({
            "productID":"" ,
            "name": "",
            "category": "",
            "image": "",
            "description": "",
            "price": ""
        })
    }
    const handleAdd = async ()=>{
        const{productID,name,category,image,description,price}= products
        if(!productID || !name || !category || !image || !description || !price){
          alert('Please fill the form completely')
        }
        else{
           const response = await addProducts(products)
           console.log(response);
           if(response.status>=200 && response.status<=300){
            alert(`product  is successfully added`)

            //to change the value of uploadVideoStatus
            setProducts(response.data)
            //making the state value none
            setProducts({
                "productID":"" ,
                "name": "",
                "category": "",
                "image": "",
                "description": "",
                "price": ""
            })
            

            
           }
           else{
            console.log(response);
            alert("something went wrong. Try again later")
           }
        }
     }
  return (
    <div>
        <div className='card p-5 shadow w-100 mt-5'>
            <div>
                <h3>Add Product Details</h3>
            </div>
        
        <form className=" rounded p-2 w-100" style={{width:"70%"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Product ID" onChange={(e)=>setProducts({...products,productID:e.target.value})}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter the name" onChange={(e)=>setProducts({...products,name:e.target.value})}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Category" onChange={(e)=>setProducts({...products,category:e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter image  url" onChange={(e)=>setProducts({...products,image:e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>setProducts({...products,description:e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Price" onChange={(e)=>setProducts({...products,price:e.target.value})} />
                </Form.Group>
                <button className='btn btn-warning me-2' onClick={handleClear}>Cancel</button>
                <button className=' btn btn-success' onClick={handleAdd}>Add</button>
          </form>
    
        </div>
    </div>
  )
}

export default AddProducts