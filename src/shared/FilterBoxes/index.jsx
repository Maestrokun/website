/* eslint-disable */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { ReactComponent as FilterDropdownArrowIcon } from "assets/filterDownArrow.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
// import DateRangePicker from "./DateRangePicker";
// import DatePicker from "./DatePicker";

import useStyles from "./styled.filterBoxes";
import { Icon } from "@mui/material";

function FilterBoxes({
  filters,
  handleClose,
  searchValue,
  filteredSearchResult,
  handleChecked,
  getFilterValue,
  showFilters,
  // isDate,
  // onChange,
  // date,
  // filterBackgroundColor,
  // showSelectedDate,
  extraNode,
  setPage,
  onRadioChecked,
}) {
  const classes = useStyles();

  const renderCheckbox = (searchValue, id, index, value) => {
    return (
      <FormControlLabel
        key={id}
        value={id}
        sx={{ p: 0 }}
        checked={searchValue?.[index]?.checkedValue?.includes(id)}
        onChange={(e) => handleChecked(e, searchValue[index], id, index)}
        control={<Checkbox size="small" />}
        label={value}
        name={value}
      />
    );
  };

  const renderRadioButton = (searchValue, id, index, value) => {
    return (
      <FormControlLabel
        key={id}
        sx={{ p: 0 }}
        checked={searchValue?.[index]?.checkedValue === id}
        onChange={(e) => onRadioChecked(e, searchValue[index], id, "add")}
        value={id}
        name="select-filter"
        control={<Radio size="small" />}
        label={value}
      />
    );
  };

  const isFilterActive = (index) =>
    searchValue[index]?.checkedValue?.length > 0 &&
    searchValue[index]?.isOpen === false;

  const activeFilters = (index) =>
    searchValue[index]?.checkedValue.length
      ? filters[index]?.options
          ?.filter(({ id }) => searchValue[index]?.checkedValue.includes(id))
          ?.map(({ value }) => value)
          .join(", ")
      : "All";

  return (
    <Grid container spacing={1} className={classes.root} alignItems="center">
      <Grid item md={12}>
        <Grid container>
          <Box display="flex" alignItems="center" marginRight="0.5rem">
            <Typography
              sx={{
                ml: 6,
                // marginBottom: '0.7rem',
                color: (theme) => theme.palette.text.secondary,
                textTransform: "capitalize !important",
              }}
              variant="subtitle2"
            >
              Filter by:
            </Typography>
          </Box>
          <Grid item xs={12} md={6} display="flex" alignItems="center">
            {showFilters && (
              <>
                {filters?.map(
                  (
                    { label, options, backgrounColor, renderType, color },
                    index
                  ) => {
                    return (
                      <Box key={label} position="relative">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="flex-start"
                          width="max-content"
                          onClick={() => handleClose(label)}
                          position="relative"
                          sx={{
                            background: isFilterActive(index)
                              ? "#1E0A3C"
                              : "#F1F2F6",
                            cursor: "pointer",
                          }}
                          p={2}
                          borderRadius={1}
                          // mb={4}
                          mr={4}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              mr: 0.5,
                              textTransform: "capitalize !important",
                              color: isFilterActive(index)
                                ? "#fff !important"
                                : "#7C7C8D !important",
                              fontWeight: "bold",
                            }}
                          >
                            {label}
                          </Typography>
                          <Box
                            sx={{
                              color: isFilterActive(index)
                                ? "#fff !important"
                                : "#7C7C8D !important",
                              mr: 2,
                              display: "flex",
                              alignItems: "center",
                              fontSize: "14px",
                            }}
                          >
                            {/* <Typography variant="subtitle2"> :</Typography> */}

                            <Typography
                              variant="subtitle2"
                              sx={{
                                textTransform: "capitalize !important",
                                color: isFilterActive(index)
                                  ? "#fff !important"
                                  : "#7C7C8D !important",
                              }}
                            >
                              : {activeFilters(index)}
                            </Typography>
                          </Box>
                          {searchValue?.[index]?.isOpen ? (
                            <Icon
                              component={KeyboardArrowUpOutlinedIcon}
                              sx={{
                                color: isFilterActive(index)
                                  ? "#fff !important"
                                  : "#7C7C8D !important",
                              }}
                            />
                          ) : (
                            <Icon
                              component={KeyboardArrowDownOutlinedIcon}
                              sx={{
                                color: isFilterActive(index)
                                  ? "#fff !important"
                                  : "#7C7C8D !important",
                              }}
                            />
                          )}
                        </Box>
                        {searchValue?.[index]?.isOpen && (
                          <Box
                            position="absolute"
                            top={45}
                            left={0}
                            mb={2}
                            p={4}
                            component={Paper}
                            elevation={0}
                            square
                            maxHeight="320px"
                            width="300px"
                            sx={{
                              overflowX: "hidden",
                              overflowY: "auto",
                              zIndex: 99,
                              // border: '1px solid red',
                              background: "white",
                              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                              >
                                {/* <Box> */}
                                {filteredSearchResult(
                                  options,
                                  searchValue[index]?.value
                                ).length > 0 ? (
                                  filteredSearchResult(
                                    options,
                                    searchValue?.[index]?.value
                                  )?.map(({ id, value }) => {
                                    return renderType === "radio"
                                      ? renderRadioButton(
                                          searchValue,
                                          id,
                                          index,
                                          value
                                        )
                                      : renderCheckbox(
                                          searchValue,
                                          id,
                                          index,
                                          value
                                        );
                                  })
                                ) : (
                                  <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                    sx={{ padding: 2 }}
                                  >
                                    No search found
                                  </Typography>
                                )}
                                {/* </Box> */}
                              </RadioGroup>
                            </FormControl>

                            <Box my={1.5}>
                              <Grid container spacing={2}>
                                <Grid item>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                      const selecteds = searchValue?.map(
                                        (res) => {
                                          return {
                                            filter: res.name,
                                            value: res.checkedValue,
                                          };
                                        }
                                      );
                                      getFilterValue(
                                        selecteds?.filter((item) => {
                                          if (item.value)
                                            return item.value.length > 0;
                                        })
                                      );
                                      handleClose(label);
                                      setPage ? setPage(0) : null;
                                    }}
                                  >
                                    Select
                                  </Button>
                                </Grid>
                                <Grid item>
                                  <Button
                                    sx={{ marginLeft: 1 }}
                                    variant="outlined"
                                    color="primary"
                                    onClick={(e) => {
                                      handleClose(label);
                                      // getFilterValue();
                                      if (renderType === "radio")
                                        onRadioChecked(
                                          e,
                                          searchValue[index],
                                          _,
                                          "cancel"
                                        );
                                    }}
                                  >
                                    cancel
                                  </Button>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                        )}
                      </Box>
                    );
                  }
                )}
              </>
            )}

            {/* {isDate && (
              <DateRangePicker
                date={date}
                onChange={onChange}
                showSelectedDate={showSelectedDate}
              />
            )} */}

            {/* {isDate && <DateRangePicker date={date} onChange={onChange} />} */}
            {extraNode ? extraNode : null}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FilterBoxes;
