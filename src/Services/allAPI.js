
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// api to upload video



    export const addProducts =async (reqBody)=>{
        return await commonAPI('POST',`${serverURL}/products`,reqBody)
    }


// get product details
export const getproductdetails=async()=>
{
    return await commonAPI('GET',`${serverURL}/product`,"")
}

// delete 
export const deleteproduct = async(id)=>
{
   return await commonAPI('DELETE',`${serverURL}/product/${id}` ,{})
}

   