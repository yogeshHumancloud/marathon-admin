import { Box, Button, Card, Dialog, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomeTable from "../Componetns/CustomeTable";
import { useNavigate } from "react-router";
import { dummydata } from "../Componetns/dummydata";
import DeleteConfirmation from "../Componetns/DeleteConfirmation";
import { FileUploader } from "react-drag-drop-files";

const Marathon = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [deletePopup, setDeletePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const header = ["name", "email", "mobile", "age", "edit", "delete"];
  const handleFileChange = (data) => {
    setFile(data);
  };

  const onEdit = (row) => {
    navigate(`/edit/${row.id}`);
  };

  const onDelete = (row) => {
    setDeletePopup(row.id);
  };
  return (
    <Box
      sx={{
        marginTop: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {deletePopup && (
        <DeleteConfirmation
          handleClose={() => setDeletePopup(false)}
          id={deletePopup}
        />
      )}
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
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingBottom: "1rem",
          }}
        >
          <Typography variant="h4">Marathon's</Typography>
          <Button onClick={() => setOpenPopUp(true)} variant="contained">
            Add
          </Button>
        </Stack>
        <Dialog
          PaperProps={{ sx: { height: "45vh", width: "50vw" } }}
          open={openPopUp}
          onClose={() => setOpenPopUp(false)}
        >
          <Stack
            marginTop={"2rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={4}
          >
            <Typography variant="h5">
              {" "}
              Please Upload Your Excel File here
            </Typography>
            <FileUploader
              handleChange={(file) => handleFileChange(file)}
              name="avatar"
              types={["xlsx", "xls", "csv"]}
            />
            <Typography>
              or Fill{" "}
              <Button sx={{ p: 0 }} onClick={() => navigate("/add")}>
                this
              </Button>{" "}
              form{" "}
            </Typography>
            <Box sx={{ display: "flex"}}>
              <Button onClick={() => setOpenPopUp(false)}>cancel</Button>
              <Button disabled={!file}>Save</Button>
            </Box>
          </Stack>
        </Dialog>

        <CustomeTable
          header={header}
          bodyList={dummydata}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Card>
    </Box>
  );
};

export default Marathon;
