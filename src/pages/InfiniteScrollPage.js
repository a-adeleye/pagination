import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../components/Comment";

export default function InfiniteScrollPage() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMoreComments, setHasMoreComments] = useState(true);

  async function fetchComments() {
    const response = await fetch(
      "http://localhost:3001/comments?_page=1&_limit=20"
    );
    const data = await response.json();
    setItems(data);
    return data;
  }

  React.useEffect(() => {
    fetchComments();
  }, []);

  async function fetchData() {

    async function fetchMoreComments() {
      const response = await fetch(
        `http://localhost:3001/comments?_page=${page}&_limit=20`
      );
      const data = await response.json();
      return data;
    }

    const additionalComments = await fetchMoreComments();

    setItems((prev) => (prev = [...prev, ...additionalComments]));

    if (additionalComments.length === 0 || additionalComments.length < 20) {
      setHasMoreComments(false);
    }

    setPage((prev) => (prev = prev + 1));
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <h1 className="font-bold text-2xl">Comments</h1>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMoreComments}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "1em" }}>
            <b>You have caught up with all comments</b>
          </p>
        }
      >
        {items.map((item) => (
          <Comment
            key={item.id}
            id={item.id}
            name={item.name}
            body={item.body}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
