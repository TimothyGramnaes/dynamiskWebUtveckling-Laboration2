import { Button, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";

interface Posts {
  title: string;
  content: string;
  _id: number;
}

function ViewPost() {
  const [posts, setPosts] = useState<Posts[]>([]);
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [setPosts]); // setPosts

  const fetchPosts = async () => {
    await fetch("/api/post", { method: "GET" })
      .then(function (res) {
        if (res.status === 400) {
          return;
        }
        // console.log(res)
        return res.json();
      })
      .then(function (data) {
        console.log([...data]);

        setPosts(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const deletePost = async (post: any) => {
    // console.log("hejpa");
    try {
      const res = await fetch(`/api/post/${post._id}`, { method: "DELETE" });
      //console.log(res);
      filterPosts(res);
    } catch (error) {
      console.error(error);
    }

    //  await fetch.deletePost
    // setPosts(posts - post)
  };

  function filterPosts(data: any) {
    console.log("posts");
    let newPosts = [
      ...posts.filter((item: any) => {
        return item._id !== data._id;
      }),
    ];
    console.log(posts);
    setPosts([...newPosts]);
    fetchPosts();
  }

  const postsList = posts.map((p) => (
    <div key={p._id}>
      <h4>{p.title}</h4>
      <p>{p.content}</p>
      <div className="btn-container">
        <button onClick={() => deletePost(p)}>Delete</button>
      </div>
    </div>
  ));

  return (
    <div className="viewlist">
      <h3>Your Posts</h3>

      {postsList}
    </div>
  );
}

export default ViewPost;
