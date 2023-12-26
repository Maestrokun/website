import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Markus from "../../../assets/markus.webp";

import Table from "../../../shared/Table";
import { PATIENT_DATA, columns } from "../../constants/patientData";

const Display = () => {
  const [page] = useState(0);
  const [rowsPerPage] = useState(10);
  const handleRowPage = (row) => {
    //  setState({ ...row, drawerName: "userDetail" });
  };

  function createData({
    id,
    patientId,
    patientName,
    firstname,
    lastname,
    consultingDoctor,
    lastVisit,
    total,
  }) {
    return {
      id,
      image: (
        <Box>
          <Avatar />
        </Box>
      ),
      name: `${firstname} ${lastname}`,
      patientId,
      patientName,
      data: (
        <Box display="flex" justifyContent="flex-start">
          <Typography
            fontWeight={700}
            variant="h5"
            fontSize={16}
            color="#000000"
            textTransform="capitalize"
          >
            {`${firstname} ${lastname}` || "-"}
          </Typography>
        </Box>
      ),
      consultingDoctor,
      lastVisit,
      total,
      // status: (
      //   <Chip
      //     label={
      //       status?.charAt?.(0)?.toUpperCase() + status.slice(1).toLowerCase()
      //     }
      //     size="small"
      //     sx={{ ...statusColors[status], borderRadius: "4px" }}
      //   />
      // ),
    };
  }

  const list = PATIENT_DATA.map(
    ({
      id,
      patientId,
      patientName,
      firstname,
      lastname,
      consultingDoctor,
      lastVisit,
      total,
    }) =>
      createData({
        id,
        patientId,
        patientName,
        firstname,
        lastname,
        consultingDoctor,
        lastVisit,
        total,
      }) || []
  );

  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          padding: "0 20px",
          justifyContent: "space-evenly",
          backgroundColor: "#fff7fd",
          // backgroundColor: "red",
        }}
      >
        <Grid item xs={5} ml={2} style={{ width: "350px", height: "620px" }}>
          <Typography
            sx={{
              fontFamily: "ubuntu",
              fontSize: "100px",
              fontWeight: 600,
              lineHeight: "97.5px",
              textAlign: "start",
              letterSpacing: "normal",
            }}
          >
            Maestro's Web and Mobile Development Services
          </Typography>
          <Typography
            sx={{
              fontFamily: "ubuntu",
              fontSize: "24px",
              fontWeight: "light",
              lineHeight: "30px",
              textAlign: "start",
              letterSpacing: "normal",
              color: "#404040",
              mt: 2,
            }}
          >
            Looking for a skilled frontend developer with expertise in HTML,
            CSS, JavaScript, TypeScript and React? Look no further than Daniel
            Davies for visually appealing and user-friendly web and mobile
            applications.
          </Typography>
          <Button
            variant="contained"
            sx={{ padding: "20px 30px", mt: 4, backgroundColor: "#004e98" }}
          >
            <Typography
              sx={{
                fontFamily: "sans-serif",
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              Learn more
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={3} mr={5}>
          <img src={Markus} alt="laptops" style={{ width: "600px" }} />
        </Grid>
        <Grid item xs={12}>
          <Table
            loading={""}
            emptyIconTitle="No Personnel"
            emptyIconMessage="You currently do not have any Personnel yet"
            results={list || []}
            columns={columns}
            // handleChangePage={handlePageChange}
            // handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            // handleMenu={handleOpenMore}
            handleRowClick={handleRowPage}
            // totalResults={userData && userData?.data?.total}
            moreMenu
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Display;
