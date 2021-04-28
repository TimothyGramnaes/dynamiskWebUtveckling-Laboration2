import { useEffect, useState } from "react"
import './posts.css'

interface Posts {
    title:string,
    content:string,
    _id:number
}

function ViewPost() {

    const [posts, setPosts] = useState<Posts[]>([])

    

    useEffect(() => {
        const options = {
            method: 'get'
        }   
        const fetchPosts = async () => {
            await fetch('/api/admin/post', options)
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
    })
    
    
    // console.log(posts)
    

    const postsList = posts.map((p) => (
        
        <div className="your-posts-container" key={p._id}>
            <div className="post-container">
                <h4>{p.title}</h4>
                <p>{p.content}</p>
                    <div className="breaker"></div>
                <div className="btn-container">
                    <button onClick= {() => console.log(p._id)}>                
                        Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="view-container">
            <h3>Your Posts</h3>
            {postsList}
        </div>
    )
}

export default ViewPost