import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { submitSearch } from "../features/InputSearchSlice";
import Tooltip from "@mui/material/Tooltip";

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
          backgroundColor: "#474747",
        }}
        onSubmit={submitHandler}
      >
        <InputBase
          sx={{ ml: 1, color: "#ababab" }}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Tooltip title="Search">
          <IconButton type="submit" label="search" sx={{ color: "#ababab" }}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="clear input">
          <span>
            <Button
              disabled={!searchValue}
              onClick={clearSearchResults}
              sx={{ color: "#ababab" }}
            >
              Clear
            </Button>
          </span>
        </Tooltip>
      </Paper>
    </>
  );
};

export default Search;
