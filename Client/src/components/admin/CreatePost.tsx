import React, {useState} from 'react'
import { Button, TextField } from '@material-ui/core'


function CreatePost() {

    // const [value, setValue] = useState<string>("")

    // const handleChange = (e:any) => {
    //     console.log(e)
    // }

    const handleClick = (e:any) => {
        console.log(e)
    }

    return(
        <div className="create-post-container">
            <h3>Create Post</h3>
            <form action="/api" method="post" className="inputField">
                <TextField 
                id="createPost"
                label="Create Post"
                multiline
                rows={10}
                // value={value}
                // onChange={handleChange}
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