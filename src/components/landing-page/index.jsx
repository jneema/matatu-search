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
  FormControl,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  SetSelectedMatatuType,
  SetSelectedRoute,
} from "../../redux/slices/matatu";
import logo from "../../assets/matatu-hub-high-resolution-logo-transparent.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedRoute, selectedMatatuType } = useSelector(
    (state) => state.matatus
  );

  const routes = [
    "Ngong Road",
    "Thika Road",
    "Kiambu Road",
    "Mombasa Road",
    "Jogoo Road",
    "Lang'ata Road",
    "Waiyaki Way",
    "Enterprise Road(Industrial Area)",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "selectedRoute") {
      dispatch(SetSelectedRoute(value));
    } else if (name === "selectedMatatuType") {
      dispatch(SetSelectedMatatuType(value));
    }
  };

  const handleShowMatatus = () => {
    if (selectedRoute) {
      navigate(`/routes/${selectedRoute.replace(/\s+/g, "-").toLowerCase()}`);
    }
  };

  return (
    <Box sx={{ margin: { lg: "0 150px 0 150px", sm: "0 40px 0 40px" } }}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <img src={logo} />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={1}>
              <FormControl fullWidth>
                <InputLabel id="selectedRoute">Select Route</InputLabel>
                <Select
                  labelId="selectedRoute"
                  id="selectedRoute"
                  name="selectedRoute"
                  value={selectedRoute}
                  label="Select Route"
                  onChange={handleChange}
                  displayEmpty
                  fullWidth
                >
                  {routes.map((route) => (
                    <MenuItem key={route} value={route}>
                      {route}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={1}>
              <FormControl fullWidth>
                <InputLabel id="selectedCarType">Select Matatu Type</InputLabel>
                <Select
                  labelId="selectedMatatuType"
                  id="selectedMatatuType"
                  name="selectedMatatuType"
                  value={selectedMatatuType}
                  label="Select Matatu Type"
                  onChange={handleChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="nissan">Nissan</MenuItem>
                  <MenuItem value="bus">Bus</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={1}>
              <Button variant="contained" onClick={() => handleShowMatatus()}>
                Confirm
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LandingPage;
