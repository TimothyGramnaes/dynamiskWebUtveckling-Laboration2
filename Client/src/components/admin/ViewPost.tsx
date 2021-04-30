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
  let [editTitle, setEditTitle] = useState("");
  let [editContent, setEditContent] = useState("");
  let [editId, setEditId] = useState();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [setPosts]);

  ///// hämtar poster ////////
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

  ///// hanterar delete posts //////
  const deletePost = async (post: any) => {
    try {
      const res = await fetch(`/api/post/${post._id}`, { method: "DELETE" });
      filterPosts(res);
      alert("Post deleted");
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

  ///// hanterar edit //////
  function handleEditForm(post: any) {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setEditTitle(post.title);
    setEditContent(post.content);
    setEditId(post._id);
  }
  const handleEditTitle = (e: any) => {
    setEditTitle(e.target.value);
  };
  const handleEditContent = (e: any) => {
    setEditContent(e.target.value);
  };

  const handelEditSubmit = async (e: any) => {
    e.preventDefault();
    const editFormData = { title: editTitle, content: editContent };
    const editedPost = await makeEditRequest(
      `/api/admin/post/${editId}`,
      "put",
      editFormData
    );
    fetchPosts();
    setIsOpen(false);
  };

  async function makeEditRequest(url: string, method: string, body: any) {
    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(body);
    return result;
  }

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

  ///// Hanterar skapa poster  ////
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

  const handleClick = (e: any) => {
    e.preventDefault();

    const formData = { title, content };
    if (title.length < 1) {
      setTitleError("Title is too short");
      return;
    }
    if (content.length < 1) {
      setContentError("Post cannot be empty");
      return;
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
        alert("Post created!");
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
      <div className="your-posts-container">
        <div className="post-container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h3>Edit Post</h3>
          </div>
          <form
            style={{
              flexDirection: "column",
              display: "flex",
            }}
            method="PUT"
            className="inputField"
          >
            <TextField
              style={{ marginTop: "1rem" }}
              label="Title"
              type="text"
              name="title"
              id="title"
              value={editTitle}
              onChange={handleEditTitle}
            />

            <TextField
              style={{ marginTop: "1rem" }}
              label="Content"
              type="text"
              name="content"
              id="content"
              value={editContent}
              onChange={handleEditContent}
            />
            <Button variant="outlined" type="submit" onClick={handelEditSubmit}>
              EDIT
            </Button>
            <Button variant="outlined" onClick={handleEditForm}>
              CLOSE
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewPost;
