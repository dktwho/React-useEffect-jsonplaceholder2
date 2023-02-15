
import React, {useEffect, useState} from 'react'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const API_URL = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(posts => setPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
      
  }, [])
  

  if(error) {
    return <h1>error {error}</h1>
  }

  return (
    <>
      <h1>Post</h1>
      <hr />
      {isLoading ? <h1>Loading...</h1> : posts.map((post) => {
        return  <Post key={post.id} {...post}  />
      })}  
    </>
  )
}

export default Posts
