import { Button, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./createPost.css";
import "./posts.css";

interface Posts {
  title: string;
  content: string;
  _id: number;
}

function ViewPost() {
  
  const [posts, setPosts] = useState<Posts[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [setPosts]);

  const fetchPosts = async () => {
    await fetch("/api/admin/post", { method: "GET" })
      .then(function (res) {
        if (res.status === 400) {
          return;
        }
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
    try {
      const res = await fetch(`/api/post/${post._id}`, { method: "DELETE" });
      filterPosts(res);
    } catch (error) {
      console.error(error);
    }
  };

  function filterPosts(data: any) {
    let newPosts = [
      ...posts.filter((item: any) => {
        return item._id !== data._id;
      }),
    ];
    setPosts([...newPosts]);
    fetchPosts();
  }
  ///// stänger/öppnar editform samt sätter id i ett state //////

  function handleEditForm(post: any) {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  ///// gör edit requesten /////////

  const postsList = posts.map((p) => (
    <div className="your-posts-container" key={p._id}>
      <div className="post-container">
        <h4>{p.title}</h4>
        <p>{p.content}</p>
        <div className="breaker"></div>
        <div className="btn-container">
          <button onClick={() => handleEditForm(p)}>Edit</button>
          <button onClick={() => deletePost(p)}>Delete</button>
        </div>
      </div>
    </div>
  ));

  // create post koden ////
  function clearIput() {
    setTitle("");
    setContent("");
  }
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    const formData = { title, content };

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/api/admin/post", options)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        fetchPosts();
      })
      .catch((error) => {
        console.log(error);
      });
    clearIput();
  };

  // create post koden /////
  if (!isOpen) {
    return (
      <div>
        <div className="create-post-container">
          <h3>Create Post</h3>
          <h5>Share your philosophical, salty thoughts with the world</h5>
          <form action="/api" method="post" className="inputField">
            <TextField
              className="title-input"
              label="Title"
              id="formTitle"
              rows={10}
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              className="content-input"
              label="Message"
              id="formContent"
              multiline
              rows={10}
              value={content}
              onChange={handleContentChange}
            />
            <Button type="submit" variant="outlined" onClick={handleClick}>
              Post
            </Button>
          </form>
        </div>
        <div className="view-container">
          <h3>Your Posts</h3>
          {postsList}
        </div>
      </div>
    );
  } else {
    return (
      <form method="put">
        <h3>Ändra produkt</h3>
        <input type="text" name="title" id="title" />
        <input type="text" name="content" id="content" />
        <button>SEND</button>
        <button onClick={handleEditForm}>CLOSE</button>
      </form>
    );
  }
}

export default ViewPost;
