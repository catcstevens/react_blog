import React, { useState } from 'react'

const NewBlogPost = ({history, addBlogPost, nextId}) => {
    //styling
    const divStyles = {
        display: 'grid',
        width: '100vw'
    }
    const inputStyles = {
        width : "70vw",
        margin: '.5em'
    }
    const labelStyles = {
        fontSize: '1.2em'
    }
    const textareaStyles = {
        height: '200px',
        margin: '.5em',
        width: '70vw'
    }
    //state
    const initialFormState = {
        title: "",
        category: "",
        content: ""
    }
    const [formState,setFormState] = useState(initialFormState)

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setFormState({...formState, [name]: value })
    }

    function handleSubmit(event){
        event.preventDefault()
        const newPost = {
            _id: nextId,
            title: formState.title,
            category: formState.category,
            modified_date: new Date(),
            content: formState.content
        }
        addBlogPost(newPost)
        history.push("/")
        //history.push(`/posts/${nextId}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles} required type="text" name="title" placeholder="Enter a title" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles} type="text" name="category" placeholder="Enter a category" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <textarea style={textareaStyles} type="text" name="content" placeholder="Enter a post" onChange={handleChange}></textarea>
            </div>
            <input type="submit" value="Add a post"></input>
        </form>
    )
}

export default NewBlogPost