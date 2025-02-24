import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  saccoName,
  finalDropOff,
  minimumFare,
  maximumFare,
  operatingHours,
  dropOffPoints,
  paymentMethods
) {
  return {
    saccoName,
    finalDropOff,
    minimumFare,
    maximumFare,
    operatingHours,
    dropOffPoints,
    paymentMethods,
  };
}

const rows = [
  createData(
    "Super Metro",
    "Juja",
    50,
    150,
    "3:00am - 12:00am",
    ["Roysambu - Ruiru - Juja"],
    ["Cash, Mpesa"]
  ),
  createData(
    "Zuri Genesis",
    "Kahawa West",
    60,
    100,
    "5:00am - 11:00pm",
    [
      "Roysambu - Mirema - Zimmerman Base - Zimmerman Canopy - Githurai 44 - Kahawa West",
    ],
    ["Cash"]
  ),
];

export default function CustomizedTables() {
  return (
    <Box sx={{ margin: "25px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sacco Name</StyledTableCell>
              <StyledTableCell align="right">Final Drop Off</StyledTableCell>
              <StyledTableCell align="right">
                Minimum Fare (Ksh)
              </StyledTableCell>
              <StyledTableCell align="right">
                Maximum Fare (Ksh)
              </StyledTableCell>
              <StyledTableCell align="right">Operating Hours</StyledTableCell>
              <StyledTableCell align="right">Drop Off Points</StyledTableCell>
              <StyledTableCell align="right">Payment Methods</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.saccoName}>
                <StyledTableCell component="th" scope="row">
                  {row.saccoName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.finalDropOff}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.minimumFare}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.maximumFare}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.operatingHours}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.dropOffPoints}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.paymentMethods}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
