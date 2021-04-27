import React, {useState} from 'react'
import { Button, TextField } from '@material-ui/core'


function CreatePost() {

    const [formTitle, setFormTitle] = useState("")
    const [formContent, setFormContent] = useState("")
    

    const handleTitleChange = (e:any) => {
            setFormTitle(e.target.value)
    }

    const handleContentChange = (e:any) => {
            setFormContent(e.target.value)
    }

    const handleClick = (e:any) => {
        e.preventDefault();

        const formData = {formTitle, formContent}

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        
        fetch('/api/admin/post', options
        ).then((response)=>{
            return response.text();
        }).then((text) => {
            console.log(text)
        }).catch((error) => {
            console.log(error)
        })
            console.log(e)
    }

    return(
        <div className="create-post-container">
            <h3>Create Post</h3>
            <form action="/api" method="post" className="inputField">
                <TextField
                    label="Title"
                    id="formTitle"
                    multiline
                    rows={10}
                    value={formTitle}
                    onChange={handleTitleChange}
                />
                <TextField 
                    label="Message"
                    id="formContent"
                    multiline
                    rows={10}
                    value={formContent}
                    onChange={handleContentChange}
                />
                <Button 
                    type="submit"
                    variant="outlined"
                    onClick={handleClick}
                >Post</Button>
            </form>
        </div>
    )
}

export default CreatePost