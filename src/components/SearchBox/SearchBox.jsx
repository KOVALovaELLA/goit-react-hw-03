/* SearchBox.jsx */

import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default SearchBox;
