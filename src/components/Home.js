import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Your Dashboard</h1>
      <p>Here are some posts fetched from an API:</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
