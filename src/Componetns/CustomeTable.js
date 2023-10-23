import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomeTable = ({ onEdit, onDelete }) => {
  // Sample data for the table
  const [rows, setRows] = useState([
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 35, city: "Chicago" },
    { id: 4, name: "Alice", age: 28, city: "San Francisco" },
  ]);

  const handleEdit = (id) => {
    // Implement your edit functionality here
    console.log(`Editing row with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement your delete functionality here
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                  onClick={() => handleEdit(row.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(row.id)}
                  sx={{ marginLeft: "4rem" }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomeTable;
