import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import CustomeTable from "../Componetns/CustomeTable";

const Marathon = () => {
  return (
    <Box
      sx={{
        marginTop: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          height: "60vh",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        <Typography sx={{ paddingBottom: "2rem" }} variant="h4">
          Marathon's
        </Typography>

        <CustomeTable />
      </Card>
    </Box>
  );
};

export default Marathon;
