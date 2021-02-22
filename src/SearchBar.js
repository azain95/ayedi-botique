import React from "react";
import { SearchBarStyled } from "./styles2";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Tell us what you're looking for"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
