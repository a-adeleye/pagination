import React from "react";
import Card from "../components/Card";
import PaginationButtons from "../components/PaginationButton";
import Select from "../components/Select";
import Loading from "../components/Loading";

export default function Pagination() {
  const [data, setData] = React.useState([]);
  const [page, setpage] = React.useState(0);
  const [itemNumber, setItemNumber] = React.useState(20);
  const [loading, setLoading] = React.useState(true);

  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  const dataStart = page * itemsPerPage;
  const dataEnd = dataStart + itemsPerPage;
  const pageData = data.slice(dataStart, dataEnd);

  function changeItemNumber(e) {
    setItemNumber((prev) => (prev = e.target.value));
    setpage(prev => prev = 0)
  }

  function displayData(e) {
    setpage((prev) => (prev = parseInt(e.target.id)));
  }

  function next() {
    if (page === numberOfPages - 1) {
      return;
    }
    setpage((prev) => (prev = prev + 1));
  }

  function previous() {
    if (page === 0) {
      return;
    }
    setpage((prev) => (prev = prev - 1));
  }

  React.useEffect(() => {
    fetch("http://localhost:3001/photos")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData((prev) => (prev = data.slice(0, itemNumber)));
      });
  }, [itemNumber]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Images</h1>
      <Select itemNumber={itemNumber} changeItemNumber={changeItemNumber} />
      {loading && <Loading />}
      <div className="flex justify-start items-center gap-6 flex-wrap">
        {pageData.map((image) => (
          <Card key={image.id} url={image.url} title={image.title} />
        ))}
      </div>
      <PaginationButtons
        numberOfPages={numberOfPages}
        page={page}
        handleClick={displayData}
        next={next}
        previous={previous}
      />
    </div>
  );
}
