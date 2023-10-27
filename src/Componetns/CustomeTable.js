import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import _ from "lodash";
import React from "react";

const CustomeTable = ({ header, bodyList, onEdit = null, onDelete = null }) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {header.map((cell) => {
              return (
                <TableCell key={cell} sx={{ fontSize: 15, fontWeight: 700 }}>
                  {_.capitalize(cell)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyList.map((row, index) => {
            return (
              <TableRow key={index}>
                {Object.keys(row).map((key) => (
                  <React.Fragment key={key}>
                    {key !== "id" && (
                      <TableCell>
                        <Typography>{row[key]}</Typography>
                      </TableCell>
                    )}
                  </React.Fragment>
                ))}
                {onEdit ? (
                  <TableCell>
                    <Button
                      id={`edit-${index}`}
                      onClick={() => onEdit(row.id)}
                      variant="contained"
                      sx={{
                        py: "0.2rem",
                        px: "0.4rem",
                        m: "0.2rem",
                        color: "white",
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                ) : null}
                {onDelete ? (
                  <TableCell>
                    <Button
                      id={`edit-${index}`}
                      onClick={() => onDelete(row.id)}
                      variant="contained"
                      color="error"
                      sx={{
                        py: "0.4rem",
                        px: "0.6rem",
                        m: "0.2rem",
                        color: "white",
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                ) : null}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomeTable;
