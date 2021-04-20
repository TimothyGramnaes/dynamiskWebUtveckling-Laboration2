import { useState } from "react"

interface Posts {
    title:string,
    content:string,
    id:number
}

function ViewPost() {

    const data:Posts[] = [
        {
            title: 'Hej',
            content: 'Lite text',
            id: 1
        },
        {
            title: 'Då',
            content: 'Lite mer text',
            id: 2
        }
    ]

    const [posts, setPosts] = useState<Posts[]>(data)

    const postsList = posts.map((p) => (
        <div key="p.id">
            <h4>{p.title}</h4>
            <p>{p.content}</p>
            <div className="btn-container">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    ))

    return(
        <div className="viewlist">
            <h3>Your Posts</h3>
            {postsList}
        </div>
    )
}

export default ViewPost