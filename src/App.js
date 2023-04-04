import "./App.css";
import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
function App() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPosatPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    // geting data from api
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json()
      setPages(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  // reciving page number from Pagination component and seting like current page. Paginate function is onClick
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  // index of last post
  const indexOfLastPost = currentPage * postPerPage;
  //index of first post
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // current 10 posts displayed on page
  const currentPosts = pages.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="container mb-5">
      <h1 className="text-primary mb-3">my Blogs</h1>
      <Posts loading={loading} pages={currentPosts} />
      <Pagination
        postPerPage={postPerPage}
        totalPages={pages.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
