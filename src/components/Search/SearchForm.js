import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
  const [searchVal, setSearchVal] = useState("");

  function searchValHandler(newVal) {
    setSearchVal(newVal);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Form has been submited!");
  }

  return (
    <form onSubmit={submitHandler} className="search-form">
      <input
        type="search"
        name="search"
        placeholder="Search on movies..."
        value={searchVal}
        onChange={(e) => searchValHandler(e.target.value)}
      />
    </form>
  );
}
