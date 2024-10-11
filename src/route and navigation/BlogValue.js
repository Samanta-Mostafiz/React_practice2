import React, { useEffect, useState } from 'react'
import { blogData } from './data'
import { useLocation, useParams } from 'react-router-dom'

const BlogValue = () => {
//     const{title}=useParams();
//     const[descData,setDescdata]=useState("");

//     useEffect(()=>{
// const linkedData=blogData.filter((blog)=>blog.title===title);
// setDescdata(blogData[0].desc);
//     },[])
// direct only title er desc khujte useLocation() er use
const location=useLocation();
  return (
    <div>
      <h2>{location.state.title}</h2>
      <p>{location.state.desc.slice(0,60)}</p>
      <p>{location.state.desc.slice(61,100)}</p>

    </div>
  )
}

export default BlogValue
