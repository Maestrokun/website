/* eslint-disable no-nested-ternary */
import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import { Button, Table as MuiTable, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import MoreVert from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
// import { ReactComponent as Action } from "assets/action.svg";
// import { ReactComponent as EmptyIcon } from "assets/emptyCallCenter.svg";

export default function Table({
  results,
  columns,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPage,
  handleRowClick,
  moreMenu,
  handleMenu,
  emptyIconTitle,
  emptyIconMessage,
  fixedColumn,
  checkbox,
  // handleCloseMoreMenu,
  // handleActivate,
  // handleDeactivate,
  // handleEdit,
  // anchorEl,
  loading,
  addBorder,
  totalResults,
  edit,
  handleEdit,
  sx,
}) {
  const { records: selectedField, changeRecords: setSelectedField } =
    // eslint-disable-next-line no-use-before-define
    React.useContext(TableRecordsContext);

  const rowCount = results?.length;
  const allSelected = selectedField?.length;

  const handleClick = (event, name) => {
    if (event.target.checked) {
      setSelectedField((prev) => [...prev, name]);
    } else {
      const filtered = selectedField.filter((val) => val.id !== name?.id);
      setSelectedField(filtered);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = results;
      setSelectedField(newSelecteds);
      return;
    }
    setSelectedField([]);
  };

  const renderTableHead = () => {
    return (
      <MuiTable>
        <TableHead>
          <TableRow>
            {checkbox && (
              <TableCell sx={{ width: "40px", background: "#FAF9F8" }}>
                <Checkbox
                  indeterminate={allSelected > 0 && allSelected < rowCount}
                  checked={rowCount > 0 && allSelected === rowCount}
                  inputProps={{ "aria-label": "select a user" }}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
            )}
            <>
              {columns?.map((column) => (
                <TableCell
                  key={column?.id}
                  align={column?.align}
                  sx={{
                    background: "#FAF9F8",
                    fontWeight: "700",
                    "&:nth-child(1)": {
                      minWidth: results?.length > 0 ? column.minWidth : "unset",
                      position: fixedColumn && "sticky",
                      left: fixedColumn && 0,
                      borderRight:
                        results?.length > 0 &&
                        fixedColumn &&
                        "2px solid #E7E7ED",
                      boxShadow:
                        fixedColumn &&
                        "0px 0px 0px rgb(0 0 0 / 10%), 0px 0px 0px 1px rgb(0 0 0 / 1%)",
                      background: "#FAF9F8",
                      paddingRight: fixedColumn && "50px !important",
                      zIndex: fixedColumn && 4,
                    },
                  }}
                >
                  {column?.label}
                </TableCell>
              ))}

              {moreMenu && (
                <TableCell
                  sx={{
                    background: "#FAF9F8",
                    borderBottom: "border: 2px solid #E7E7ED",
                  }}
                />
              )}
              {edit && (
                <TableCell
                  sx={{
                    background: "#FAF9F8",
                    borderBottom: "border: 2px solid #E7E7ED",
                  }}
                >
                  Action
                </TableCell>
              )}
            </>
          </TableRow>
        </TableHead>
      </MuiTable>
    );
  };

  if (results?.length === 0) {
    return (
      <Box
        sx={{
          border: addBorder && "1px solid #E7E7ED",
          borderRadius: addBorder && 2,
          width: "100%",
          ...sx,
        }}
      >
        {renderTableHead()}
        <Box display="grid" height="45vh" sx={{ placeItems: "center" }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Box sx={{ textAlign: "center" }}>
              {/* <EmptyIcon /> */}
              <Typography variant="h4" sx={{ mt: 2 }}>
                {emptyIconTitle}
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  margin: "0px",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                {emptyIconMessage}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Paper
        sx={{
          borderTopLeftRadius: "30px !important",
          borderTopRightRadius: "30px !important",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Box
          sx={{
            maxHeight: 510,
            height: "auto",
            minHeight: 100,
            border: addBorder && "1px solid #E7E7ED",
            borderRadius: addBorder && 2,
            borderBottom: "none",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "0.05em",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#E7E7ED",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#CDCED9",
            },
            ...sx,
          }}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        >
          <MuiTable stickyHeader>
            <TableHead>
              <TableRow>
                {checkbox && (
                  <TableCell sx={{ width: "40px", background: "#FAF9F8" }}>
                    <Checkbox
                      indeterminate={allSelected > 0 && allSelected < rowCount}
                      checked={rowCount > 0 && allSelected === rowCount}
                      inputProps={{ "aria-label": "select a user" }}
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                )}
                <>
                  {columns?.map((column) => (
                    <TableCell
                      key={column?.id}
                      align={column?.align}
                      sx={{
                        background: "#FAF9F8",
                        fontWeight: 600,
                        color: "#139086",

                        "&:nth-child(1)": {
                          minWidth:
                            results?.length > 0 ? column.minWidth : "unset",
                          position: fixedColumn && "sticky",
                          left: fixedColumn && 0,
                          borderRight:
                            results?.length > 0 &&
                            fixedColumn &&
                            "2px solid #E7E7ED",
                          boxShadow:
                            fixedColumn &&
                            "0px 0px 0px rgb(0 0 0 / 10%), 0px 0px 0px 1px rgb(0 0 0 / 1%)",
                          background: "#FAF9F8",
                          paddingRight: fixedColumn && "50px !important",
                          zIndex: fixedColumn && 4,
                          fontWeight: 600,
                          color: "#139086",
                        },
                      }}
                    >
                      {column?.label}
                    </TableCell>
                  ))}
                  {moreMenu && (
                    <TableCell
                      sx={{
                        background: "#FAF9F8",
                        borderBottom: "border: 2px solid #E7E7ED",
                        fontWeight: 600,
                        color: "#139086",
                      }}
                    >
                      Action
                    </TableCell>
                  )}
                  {edit && (
                    <TableCell
                      sx={{
                        background: "#FAF9F8",
                        borderBottom: "border: 2px solid #E7E7ED",
                      }}
                    >
                      Action
                    </TableCell>
                  )}
                </>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {results?.length > 0 ? ( */}

              {results
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => {
                  const isUserSelected = selectedField
                    ?.map((f) => f?.id)
                    ?.includes(row?.id);
                  return (
                    <TableRow
                      // hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          background: "#FAF9F8",
                        },
                      }}
                    >
                      {checkbox && (
                        <TableCell>
                          <Checkbox
                            sx={{ width: "40px" }}
                            checked={isUserSelected}
                            onChange={(event) => handleClick(event, row)}
                            inputProps={{ "aria-label": "select a user" }}
                          />
                        </TableCell>
                      )}
                      {columns.map((column) => {
                        let value;
                        if (column.isDeep) {
                          const [val1, val2] = column.key.split(".");
                          value = row[val1][val2];
                        } else {
                          value = row[column.key];
                        }
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            onClick={() => handleRowClick(row)}
                            sx={{
                              color: "#272833",
                              fontWeight: 700,
                              fontSize: "16px",
                              minWidth: column.minWidth ?? "unset",
                              "&:nth-child(1)": {
                                fontSize: "16px",
                                position: fixedColumn && "sticky",
                                left: fixedColumn && 0,
                                boxShadow:
                                  fixedColumn &&
                                  "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
                                background: fixedColumn && "#FFF",
                                "&:hover": {
                                  background: "#FAF9F8",
                                },
                              },
                            }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      {moreMenu && (
                        <TableCell>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#139086",
                              borderRadius: "15px",
                              marginRight: "0",
                            }}
                            onClick={(event) => handleMenu(event, row)}
                          >
                            Show Profile
                          </Button>
                          {/* <IconButton
                            onClick={(event) => handleMenu(event, row)}
                          >
                            <MoreVert />
                          </IconButton> */}
                        </TableCell>
                      )}
                      {edit && (
                        <TableCell>
                          <IconButton
                            onClick={(event) => handleEdit(event, row)}
                          >
                            {/* <Action /> */}
                          </IconButton>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </MuiTable>
        </Box>
        {results?.length > 0 && (
          <Box
            sx={{
              border: addBorder && "1px solid #E7E7ED",
              borderRadius: addBorder && 2,
              borderTop: "none",
            }}
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          >
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={totalResults || results?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        )}
      </Paper>
    </>
  );
}

Table.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape).isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleRowClick: PropTypes.func,
  moreMenu: PropTypes.bool,
  handleMenu: PropTypes.func,
  emptyIconTitle: PropTypes.string,
  emptyIconMessage: PropTypes.string,
  fixedColumn: PropTypes.bool,
  totalResults: PropTypes.arrayOf(PropTypes.shape).isRequired,
  // handleCloseMoreMenu: PropTypes.func.isRequired,
  // handleActivate: PropTypes.func,
  // handleDeactivate: PropTypes.func,
  // handleEdit: PropTypes.func,
  // anchorEl: PropTypes.bool,
  loading: PropTypes.bool,
  checkbox: PropTypes.bool,
  addBorder: PropTypes.bool,
  edit: PropTypes.bool,
  handleEdit: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
};

Table.defaultProps = {
  handleRowClick: () => {},
  moreMenu: false,
  handleMenu: () => {},
  fixedColumn: false,
  emptyIconMessage: "",
  emptyIconTitle: "",
  // anchorEl: false,
  // handleEdit: () => {},
  // handleDeactivate: () => {},
  // handleActivate: () => {},
  loading: false,
  checkbox: false,
  addBorder: false,
  edit: false,
  handleEdit: () => {},
  sx: {},
};

/**
 * usage
 * import tableRecordContext
 * @const { records } = React.useContext(TableRecordsContext);
 * here records hold all selected values
 * you also have access to changeRecords incase you want to clear the records or selected fields
 *
 * eg :
 * @import Table, { TableRecordsContext } from "shared/NewTable";
 *
 * @const { records, changeRecords } = React.useContext(TableRecordsContext);
 * NB: you need to pass checkbox props to your table component for this to work
 * it is recommended to clear the records before leaving the component like this
 *
 *useEffect(() => {
 *return () => changeRecords([]);
 * }, []);
 *
 */
export const TableRecordsContext = React.createContext({});
// eslint-disable-next-line react/prop-types
export function TableRecordsProvider({ children }) {
  const [records, setRecords] = React.useState([]);

  // eslint-disable-next-line no-shadow
  const handleChangeRecords = (records) => {
    setRecords(records);
  };

  return (
    <TableRecordsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        records,
        changeRecords: handleChangeRecords,
      }}
    >
      {children}
    </TableRecordsContext.Provider>
  );
}
