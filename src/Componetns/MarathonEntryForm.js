import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const MarathonEntryForm = ({ handleClose, isEdit = false }) => {
  const [date, setDate] = useState(null);
  return (
    <Grid container sx={{ padding: "5%" }}>
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        paddingX={"1rem"}
      >
        <Typography variant="h5">Marthon {isEdit ? `Edit` : "Add"}</Typography>
      </Grid>
      <Grid item xs={12} lg={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
        />
      </Grid>
      <Grid item xs={12} lg={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          rows={4}
          fullWidth
          id="location"
          label="Location"
          name="location"
        />
      </Grid>{" "}
      <Grid item xs={12} lg={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
        />
      </Grid>{" "}
      <Grid item xs={12} lg={6} paddingX={"1rem"} paddingTop={"1rem"}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ width: "100%" }}
            label="Date"
            minDate={dayjs()}
            format="DD MMM YYYY"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
      </Grid>{" "}
      <Grid item xs={12} lg={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="point_location"
          label="Point Location"
          name="point_location"
        />
      </Grid>
      <Grid item xs={12} lg={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="cutoff_time"
          label="Cutoff Time"
          name="cutoff_time"
        />
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        padding={"1rem"}
      >
        <Typography variant="h5">Categories </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        paddingX={"1rem"}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button color="primary" variant="outlined">
          Save
        </Button>
        <Button
          color="error"
          variant="outlined"
          sx={{ marginLeft: "2rem" }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default MarathonEntryForm;
