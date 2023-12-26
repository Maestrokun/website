/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { DateRange } from "react-date-range";
// import "./style.css";

function DateRangePickerExt({ state, handleChange }) {
  const { rangePicker } = state;
  return (
    <DateRange
      dateDisplayFormat="dd/MM/yyyy"
      linkedCalendars
      moveRangeOnFirstSelection
      date={(now) => now}
      ranges={[rangePicker?.selection]}
      onChange={handleChange}
      theme={{
        DateRange: {
          background: "transparent",
        },
        Calendar: {
          width: "200px",
          padding: "0px",
          position: "relative",
          zIndex: 999,
        },
        MonthAndYear: {
          background: "#55B1E3",
          color: "#fff",
          padding: "20px 10px",
          height: "auto",
        },
        MonthButton: {
          background: "#fff",
        },
        MonthArrowPrev: {
          borderRightColor: "#55B1E3",
        },
        MonthArrowNext: {
          borderLeftColor: "#55B1E3",
        },
        Weekday: {
          background: "#3AA6DF",
          color: "#fff",
          padding: "10px",
          height: "auto",
          fontWeight: "normal",
        },
        Day: {
          // borderRadius: "100%",
          transition:
            "transform .1s ease, box-shadow .1s ease, background .1s ease",
        },
        DaySelected: {
          background: "#55B1E3",
        },
        DayActive: {
          background: "#55B1E3",
          boxShadow: "none",
        },
        DayInRange: {
          background: "#eee",
          color: "#55B1E3",
        },
      }}
    />
  );
}

export default DateRangePickerExt;
