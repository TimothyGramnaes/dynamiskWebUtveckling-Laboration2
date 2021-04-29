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
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [changePost, setChangePost] = useState("")
  const [changeTitle, setChangeTitle] = useState("");
  const [changeContent, setChangeContent] = useState("");
  

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
      alert('Post deleted')
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
    console.log(post)
    setChangePost(post)
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
          <button onClick={() => handleEditForm(p._id)}>Edit</button>
          <button onClick={() => deletePost(p)}>Delete</button>
        </div>
      </div>
    </div>
  ));

  // create post koden ////
  function clearInput() {
    setTitle("");
    setContent("");
  }
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleChangeTitle = (e: any) => {
    setChangeTitle(e.target.value);
  };

  const handleChangeContent = (e: any) => {
    setChangeContent(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    const formData = { title, content };
    if (title.length < 1) {
      setTitleError('Title is too short')
      return
    }
    if (content.length < 1) {
      setContentError('Post cannot be empty')
      return
    }

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/api/admin/post", options)
      .then((response) => {
        alert('Post created!')
        return response.text();
      })
      .then((text) => {
        fetchPosts();
      })
      .catch((error) => {
        console.log(error);
      });
    clearInput();
  };

  const confirmChangePost = (e:any) => {
    e.preventDefault();
    console.log(changePost)

    const formData = { changeTitle, changeContent };
    if (changeTitle.length < 1) {
      setTitleError('Title is too short')
      return
    }
    if (changeContent.length < 1) {
      setContentError('Post cannot be empty')
      return
    }

    const options = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(`/api/admin/post/${changePost}`, options)
      .then((response) => {
        alert('Put created!')
        return response.text();
      })
      .then((text) => {
        fetchPosts();
      })
      .catch((error) => {
        console.log(error);
      });

  }

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
            <p className="error-text">{titleError}</p>
            <TextField
              className="content-input"
              label="Message"
              id="formContent"
              multiline
              rows={10}
              value={content}
              onChange={handleContentChange}
            />
            <p className="error-text">{contentError}</p>
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
      <form action="/api" method="put">
        <h3>Ändra produkt</h3>
        <TextField
              className="title-input"
              label="Title"
              id="formTitle"
              rows={10}
              value={changeTitle}
              onChange={handleChangeTitle}
            />
            
            <TextField
              className="content-input"
              label="Message"
              id="formContent"
              multiline
              rows={10}
              value={changeContent}
              onChange={handleChangeContent}
            />
        <Button type="submit" variant="outlined" onClick={confirmChangePost}>
              Send
        </Button>
        <button onClick={handleEditForm}>CLOSE</button>
      </form>
    );
  }
}

export default ViewPost;
