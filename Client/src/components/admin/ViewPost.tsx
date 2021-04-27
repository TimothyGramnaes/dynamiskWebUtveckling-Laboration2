import { useState } from "react"

interface Posts {
    title:string,
    salt:string,
    id:number
}

function ViewPost() {

    const [posts, setPosts] = useState<Posts[]>([])

    // const data:Posts[] = [
    //     {
    //         title: 'Hej',
    //         content: 'Lite text',
    //         id: 1
    //     },
    //     {
    //         title: 'Då',
    //         content: 'Lite mer text',
    //         id: 2
    //     }
    // ]

    const options = {
        method: 'get'
    }
    // console.log(posts)
    

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
        <div>
            <h4>{p.title}</h4>
            <p>{p.salt}</p>
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