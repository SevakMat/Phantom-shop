import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { SearchProdutEffect } from "../../../../store/effects/product/product.effect";
import { useDispatch } from "react-redux";

const SearchComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  const delayedSearch = (query: string) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    const timer = setTimeout(() => {
      dispatch(SearchProdutEffect(query));
    }, 400);
    setDebounceTimer(timer);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    delayedSearch(query);
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default SearchComponent;
