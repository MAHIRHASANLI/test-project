import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteProduct, getProducts } from "./api/requests";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  //! DELETE FUNCTION;
  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      if (window.confirm("Are you sure you want to delete this product?")) {
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
      }
    });
  };
  return (
    <div className="container">
      <div>
        <h1>Employee Management Software</h1>
      </div>
      <div className="add-btn">
        <Link to="/post">
          <Button variant="outlined">ADD PAGE</Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Rating -(rate)</TableCell>
              <TableCell align="left">Rating -(count)</TableCell>
              <TableCell align="left">Update</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell align="left">{item.rating.rate}</TableCell>
                <TableCell align="left">{item.rating.count}</TableCell>
                <TableCell align="left">
                  <Button variant="outlined" color="success">
                    <Link to={`/product/${item.id}`}>Update</Link>
                  </Button>
                </TableCell>
                <TableCell align="left" onClick={() => handleDelete(item.id)}>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
