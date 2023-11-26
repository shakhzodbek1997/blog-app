import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
