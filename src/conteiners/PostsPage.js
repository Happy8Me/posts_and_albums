import { useState, useEffect, useRef } from "react";
import React from "react";

import { NavBar } from "../components/NavBar";
import { ListPosts } from "../components/Posts/ListPosts";
import { GridPosts } from "../components/Posts/GridPosts";
import { sortPosts, serchPosts, getAllItems } from "../api";
import { useDebounce } from "../hooks/useDebounce";
import { Footer } from "../components/Footer";

const PostsPage = () => { 

  const [posts, setPosts] = useState([]);
  const [pagePosts, setPagePosts] = useState(1); 
  const [sortOrder, setSortOrder] = useState("asc");
  const [limitPosts, setlimitPosts] = useState(6);
  const [currentNumOfPosts, setCurrentNumOfPosts] = useState(limitPosts);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewGrid, setViewGrid] = useState(true);
  const [viewList, setViewList] = useState(false);
  const [totalPosts, setTotalPosts] = useState();
  const initialPostsRender = useRef(true);
  const debouncedValue = useDebounce(searchQuery, 500);

  useEffect(() => {
      sortPosts(limitPosts, sortOrder)
        .then(posts => {setPosts(posts.data)})    
  }, [sortOrder, limitPosts])

  useEffect(()=>{
    if (initialPostsRender.current) {
      initialPostsRender.current = false
    } else {
      serchPosts(limitPosts, pagePosts, sortOrder, debouncedValue)
        .then(posts => setPosts(posts.data))
        setTimeout(()=>{setIsSearching(false)}, 1500)
        // setIsSearching(false)
    }
  }, [searchQuery, pagePosts])

  useEffect(()=>{
    getAllItems(location.pathname)
      .then(posts => setTotalPosts(posts.data.length))
  }, [])

  return (
    <div className="uk-section">
      <div className="uk-container">
          <div className="uk-margin-medium-bottom uk-flex">
            <NavBar 
              setSortOrder={setSortOrder} 
              setlimitPosts={setlimitPosts}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
              setSearchQuery={setSearchQuery} 
              viewGrid={viewGrid}
              setViewGrid={setViewGrid}
              viewList={viewList}
              setViewList={setViewList}
            />
          </div>
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
          {
            viewGrid 
            ? <GridPosts posts={posts} /> 
            : <ListPosts posts={posts} />
          }
          </div>
      </div>
      <Footer 
        limit={limitPosts}
        currentNumOfItems={currentNumOfPosts}
        setCurrentNumOfItems={setCurrentNumOfPosts}
        order={sortOrder}
        data={posts}
        setItems={setPosts}
        total={totalPosts}
        page={pagePosts}
        setPage={setPagePosts}
      />
    </div>
  );
}

export default React.memo(PostsPage);