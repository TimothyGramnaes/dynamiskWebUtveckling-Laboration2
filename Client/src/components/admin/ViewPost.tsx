import { useState } from "react"

interface Posts {
    title:string,
    content:string,
    _id:number
}

function ViewPost() {

    const [posts, setPosts] = useState<Posts[]>([])

    const options = {
        method: 'get'
    }   

    const fetchPosts = async () => {
        await fetch('/api/post', options)
        .then(function (res){
            if(res.status === 400) {
            return
            } 
            // console.log(res)
            return res.json()
        })
        .then(function (data) { 
            // console.log(data)
            
            setPosts(data)
        }).catch(function (err) {
            console.log(err)
    })
    }

    fetchPosts()
    

    

    const postsList = posts.map((p) => (
        <div key={p._id}>
            <h4>{p.title}</h4>
            <p>{p.content}</p>
            <div className="btn-container">
                <button onClick= {() => console.log(p._id)}>                
                    Edit</button>
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