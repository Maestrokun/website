/* eslint-disable */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as SearchImg } from "../../assets/search-refraction.svg";

import FilterBoxes from "../FilterBoxes";
import TextField from "../TextInput";

function SearchAndFilters({
  filters,
  showFilters,
  getFilterValue,
  date,
  onChange,
  isDate,
  filterBackgroundColor,
  extraNode,
  getSearchValue,
  setPage,
  grid,
  showSelectedDate,
}) {
  const { control } = useForm({});
  const values = filters?.map((fil) => {
    return {
      name: fil.label,
      value: "",
      isOpen: false,
      checked: false,
      checkedValue: [],
    };
  });

  const [searchValue, setSearchValue] = useState(values);

  // console.log(searchValue)

  const handleClose = (label) => {
    const result = searchValue?.map((el) => {
      if (el.name === label) {
        el.isOpen = !el.isOpen;
      } else {
        el.isOpen = false;
      }
      return el;
    });
    setSearchValue(result);
  };

  const filteredSearchResult = (list = [], search) => {
    if (Boolean(search)) {
      let filteredList = list.filter(({ value }) => {
        let filtered = value?.toLowerCase()?.includes(search?.toLowerCase());
        return filtered;
      });
      return filteredList;
    }
    return list;
  };

  const onRadioChecked = (e, selected, id, action) => {
    const result = searchValue?.map((el) => {
      if (el.name === selected.name) {
        el.checkedValue = action === "cancel" ? "" : id;
        el.checked = !el.checked;
      }
      return el;
    });
    setSearchValue(result);
  };

  const handleChecked = (e, selected, id, index) => {
    const ids = filters
      ?.map(({ options }) => options)
      [index]?.map(({ id }) => id);

    if (e.target.checked) {
      if (id === "all") {
        const result = searchValue?.map((el) => {
          if (el.name === selected.name) {
            el.checkedValue = ids;
            el.checked = !el.checked;
          }
          return el;
        });
        setSearchValue(result);
        return;
      }
      const result = searchValue?.map((el) => {
        if (el.name === selected.name) {
          el.checkedValue.push(id);
          el.checked = !el.checked;
        }
        return el;
      });
      setSearchValue(result);
    } else {
      if (id === "all") {
        const result = searchValue?.map((el) => {
          if (el.name === selected.name) {
            el.checkedValue = [];
            el.checked = !el.checked;
          }
          return el;
        });
        setSearchValue(result);
        return;
      }
      const result = searchValue?.map((el) => {
        if (el.name === selected.name) {
          el.checkedValue = el.checkedValue?.filter((un) => un !== id);
          el.checked = !el.checked;
        }
        return el;
      });
      setSearchValue(result);
    }
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={grid?.t?.xs || 12} md={grid?.t?.md || 5}>
        <TextField
          control={control}
          name="search"
          placeholder="Search"
          type="search"
          size="small"
          fullWidth
          sx={{
            // height: "35px",
            "& .MuiMenuList-root": {
              p: 0,
            },
            // "& .MuiInputBase-root": {
            //   borderRadius: "15px !important",
            //   border: "1px light #B7C7CC !important",
            //   height: "57.177px",
            //   borderColor: "#B7C7CC",
            // },
            "& .MuiInputBase-root": {
              borderRadius: "15px !important",
              border: "1px light #B7C7CC !important",
              height: "57.177px",
              "& .MuiOutlinedInput-root": {
                "& .Mui-focused": {
                  "&. MuiOutlinedInput-notchedOutline": {
                    borderColor: "#B7C7CC",
                  },
                },
              },
            },
          }}
          onChange={(e) => {
            !!setPage ? setPage(0) : null;
            getSearchValue?.(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchImg
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.06)",
                    height: "50px",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {showFilters || isDate ? (
        <Grid item xs={grid?.f?.xs || 12} md={grid?.f?.md || 6}>
          <FilterBoxes
            filters={filters}
            setPage={setPage}
            handleClose={handleClose}
            searchValue={searchValue}
            filteredSearchResult={filteredSearchResult}
            handleChecked={handleChecked}
            getFilterValue={getFilterValue}
            isDate={isDate}
            showFilters={showFilters}
            date={date}
            onRadioChecked={onRadioChecked}
            onChange={onChange}
            filterBackgroundColor={filterBackgroundColor}
            extraNode={extraNode}
            showSelectedDate={showSelectedDate}
          />
        </Grid>
      ) : null}
    </Grid>
  );
}

export default SearchAndFilters;
