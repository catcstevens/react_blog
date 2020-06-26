import React from 'react'
import {Link} from 'react-router-dom'

const BlogPost = ({history,post, showControls, deleteBlogPost}) => {
    if (!post) return <p>we do not have a post with that id</p>

    const linkStyles = {
        textDecoration : 'none',
        color : 'black'
    }
    //console.log("showControls: ",showControls)
    function handleDelete (){
        deleteBlogPost(post._id)
        history.push("/")
    }

    function handleEdit(){
        history.push(`/posts/edit/${post._id}`)
    }
    //<button onClick={handleEdit}>Edit</button>
    //<Link to={`/posts/edit/${post._id}`}><button>Edit</button></Link>
    const {title, modified_date, category, content} = post
    return (
        <div>
            <Link style={linkStyles} to={`/posts/${post._id}`}>
                <h2>{title}</h2> 
            </Link>
            <p>{modified_date.toLocaleString()}</p>
            <p>{category}</p>
            <p>{content}</p>
            {showControls && 
                <div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            }
        </div>
    )
}

export default BlogPost