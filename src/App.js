import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./Posts";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Posts}>
            {posts.map((post) => (
              <Posts key={post.id} title={post.title} body={post.body} />
            ))}
          </Route>
          ;
        </div>
      </Switch>
    </Router>
  );
};

export default App;
