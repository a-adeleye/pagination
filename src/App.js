import "./style/App.css";
import React from "react";
import Header from "./components/Header";
import Pagination from "./pages/PaginationPage";
import InfiniteScroll from "./pages/InfiniteScrollPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pagination />}></Route>
          <Route path="pagination" element={<Pagination />}></Route>
          <Route path="infinite-scroll" element={<InfiniteScroll />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
