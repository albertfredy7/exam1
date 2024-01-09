import React, { useEffect } from 'react'

function Products() {
    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data);
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
        <div>
       <div className='text-center d-flex align-items-center justify-content-center mt-5'>
         <form className="d-flex w-50" role="search">
          <input className="form-control me-2" type="search" placeholder="Search by category" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
       </div>
       <div className='text-center mt-4'>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Product id</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Image url</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <td></td>
  </tbody>
  
</table>
       </div>
    </div>
    </div>
  )
}

export default Products