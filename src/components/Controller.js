import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

export default function Controller({ type, handleChange }) {
  const categories = [
    "Business",
    "Entertainment",
    "Genral",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <Grid style={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: 150, marginTop: 2, marginBottom: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Category"
            onChange={handleChange}
          >
            {categories.map((cat, i) => {
              return (
                <MenuItem key={i} value={cat}>
                  {cat}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}
