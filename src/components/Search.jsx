import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { submitSearch } from "../features/InputSearchSlice";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(e.target[0].value);
    dispatch(submitSearch(searchValue));
    setSearchValue("");
  };
  const clearSearchResults = (e) => {
    setSearchValue("");
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 0px",
          display: "flex",
          alignItems: "center",
          height: "fit-content",
          marginTop: "20px",
        }}
        onSubmit={submitHandler}
      >
        <InputBase
          sx={{ ml: 1 }}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IconButton type="submit" label="search">
          <SearchIcon />
        </IconButton>
        <Button disabled={!searchValue} onClick={clearSearchResults}>
          Clear
        </Button>
      </Paper>
    </>
  );
};

export default Search;
