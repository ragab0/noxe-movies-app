import React, { useState } from "react";

export default function Pagination() {
  const [current, setCurrent] = useState(3);
  const numbers = new Array(15).fill(null);

  return (
    <div className="pagination">
      <li className={current === 1 ? "disabled" : ""}>Prev</li>
      {numbers.map((_, indexOfBtn) => (
        <li
          key={indexOfBtn}
          className={`${
            indexOfBtn + 1 === current || // CURRENT
            indexOfBtn + 1 === current - 1 || // PREV
            indexOfBtn + 1 === current + 1 // NEXT
              ? "active"
              : ""
          }`}
          onClick={() => setCurrent(indexOfBtn + 1)}
        >
          {indexOfBtn}
        </li>
      ))}
      <li className={current === numbers.length ? "disabled" : ""}>Next</li>
    </div>
  );
}
