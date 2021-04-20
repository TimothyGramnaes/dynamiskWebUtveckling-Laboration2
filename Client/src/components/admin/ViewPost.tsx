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


    const list = posts.map((p) => {
        <p>{p.title}</p>
    })

    return(
        <div className="viewlist" style={{height:"10rem"}}>
            <h3>Your Posts</h3>
            {list}
        </div>
    )
}

export default ViewPost