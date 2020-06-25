import React,{useState, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from './components/Nav'
import BlogPosts from './components/BlogPosts'
import BlogPost from './components/BlogPost'
import NewBlogPost from './components/NewBlogPost'
import EditBlogPost from './components/EditBlogPost'
import blogData from './data/post_data'

const App = () => {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    setBlogPosts(blogData)
  },[])

  // Returns a single post based on the id provided
  function getPostFromId(id) {
    const post =  blogPosts.find((post) =>  post._id === parseInt(id))
    return post
  }

  // Gets the next available id for a new post 
  function getNextId(){
    const ids = blogPosts.map((post) => post._id)
    return ids.sort()[ids.length-1] + 1
  }

  // Add a post to blogPosts
  function addBlogPost(post) {
    setBlogPosts([...blogPosts, post])
  }

  // Update a post to blogPosts
  function updateBlogPost(updatedPost) {
    const otherPosts = blogPosts.filter((post) => post._id !== updatedPost._id)
    setBlogPosts([...otherPosts, updatedPost])
  }

  // Delete a blog post that matches id
  function deleteBlogPost(id) {
    const updatedPosts = blogPosts.filter((post) => post._id !== parseInt(id))
    setBlogPosts(updatedPosts)
  }
 
  return (
    <div >
        <BrowserRouter>
          <Nav />
          <h1>Many Mumbling Mice</h1>
          <Route exact path="/" render={(props) => <BlogPosts {...props} postData={blogPosts} /> } />
          <Route exact path="/posts/:id" render={(props) => <BlogPost {...props} post={getPostFromId(props.match.params.id)} showControls deleteBlogPost={deleteBlogPost}/> } />
          <Route exact path="/posts/new" render={(props) => <NewBlogPost {...props} addBlogPost={addBlogPost} nextId={getNextId()}/> }/>
          <Route exact path="/posts/edit/:id" render={(props) => <EditBlogPost {...props} updateBlogPost={updateBlogPost} post={getPostFromId(props.match.params.id)}/> }/>
        </BrowserRouter>
    </div>
  )
}

export default App
