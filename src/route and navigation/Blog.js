import React, { useState } from "react";

import { blogData } from "./data";
import { Link } from "react-router-dom";

const Blog = () => {
  const truncateString=(str,num)=>{
    if(str.length>num){
      return str.slice(0,num) + "...";
    }
    else{
      return str;
    }

  }
  const [blogs, setBlogData] = useState(blogData);
  return (
    <div>
      <h1>this is blog page</h1>
     <section>
     {blogs.map((blog)=>{
      const {id,title,desc}=blog;
      return <article key={id}>
        <h1>{title}</h1>
        <p>{truncateString(desc,60)}</p>
        <Link to={title} state={{id,title,desc}}>learn more</Link>
      </article> 
      })}
     </section>
    </div>
  );
};

export default Blog;
