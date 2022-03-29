import React from "react";

export default function PaginationButtons({
  numberOfPages,
  handleClick,
  page,
  next,
  previous,
}) {
  const [buttonNumbers, setButtonNumbers] = React.useState([]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  React.useEffect(() => {
    function generateButtonNumbers() {
      let numbers = [];
      for (let i = 1; i <= numberOfPages; i++) {
        numbers.push(i);
      }
      return numbers;
    }

    const numbers = generateButtonNumbers();
    setButtonNumbers(numbers);
  }, [numberOfPages]);

  return (
    <nav aria-label="Page navigation" className="mt-2">
      <ul className="flex w-full flex-wrap">
        <li>
          <button
            id="prev"
            onClick={previous}
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
          >
            Prev
          </button>
        </li>
        {buttonNumbers.map((item) => (
          <li key={item}>
            <button
              id={item - 1}
              className={classNames(
                page === item - 1
                  ? "text-white bg-indigo-600"
                  : "bg-white text-indigo-600",
                "h-10 px-5 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100"
              )}
              onClick={handleClick}
            >
              {item}
            </button>
          </li>
        ))}

        <li>
          <button
            id="next"
            onClick={next}
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
