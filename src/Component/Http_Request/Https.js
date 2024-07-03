import React, { useEffect, useState } from 'react'

function Https() {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (Response => Response.json())
    .then (data => {setPosts(data)})
    .catch(error => {setPosts(error)})

  })


  return (
    <div>
      Post
      {
        posts.map(post=> {
          return (
            <p>{post.id}. {post.title}</p>
          )
        })
      }
    </div>
  )
}

export default Https
