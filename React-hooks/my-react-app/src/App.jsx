
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function App() {
  
  const [posts,setPosts] = useState([])
  const [loadng,setLoading] = useState(true)

  useEffect(() => {
const fetchPosts = async() => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
    setPosts(response.data);
    setLoading(false);
 }
  catch(error){
    console.log(error);   
  }
}
    fetchPosts();
},[])

  return (
    <>
      <p>Provide data from API</p>
      <ul>
        {posts.map((a)=>(


          <li key={a.id}>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
          </li>
      ))}
      </ul>
    </>
  )
}
