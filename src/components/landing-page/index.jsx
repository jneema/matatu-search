import React from "react";
import {
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
  Stack,
  InputLabel,
  Card,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SetDestination, SetStartingPoint } from "../../redux/slices/matatu";
import logo from "../../assets/matatu-hub-high-resolution-logo-transparent.svg";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { destination, startingPoint } = useSelector((state) => state.matatus);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "startingPoint") {
      dispatch(SetStartingPoint(value));
    } else if (name === "destination") {
      dispatch(SetDestination(value));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "white",
      }}
    >
      <Card
        sx={{
          padding: 4,
          width: "25%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <img src={logo} />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel>Select Starting Point</InputLabel>
                <Select
                  id="startingPoint"
                  onChange={handleChange}
                  name="startingPoint"
                  style={{ width: "100%" }}
                  value={startingPoint}
                  displayEmpty
                >
                  <MenuItem value="cbd">CBD</MenuItem>
                  <MenuItem value="Rongai">Rongai</MenuItem>
                  <MenuItem value="Kilimani">Kilimani</MenuItem>
                  <MenuItem value="Roysambu">Roysambu</MenuItem>
                </Select>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel>Select Destination</InputLabel>
                <Select
                  id="destination"
                  onChange={handleChange}
                  name="destination"
                  style={{ width: "100%" }}
                  value={destination}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Destination
                  </MenuItem>
                  <MenuItem value="Rongai">Rongai</MenuItem>
                  <MenuItem value="Kilimani">Kilimani</MenuItem>
                  <MenuItem value="Roysambu">Roysambu</MenuItem>
                </Select>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <Button
                  variant="contained"
                  onClick={() => console.log(destination, startingPoint)}
                >
                  Confirm
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default LandingPage;
