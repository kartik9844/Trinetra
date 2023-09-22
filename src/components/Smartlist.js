import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../components/firebase";
import { FileDownload } from "@mui/icons-material";
import { NavLink } from 'react-router-dom';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,query,where,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";



export default function Smartlist() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "Equipments");
  const q = query(empCollectionRef, where("Lab", "==", "Smart lab"));
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(q);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getUsers();
    }
  };

  return (
    <>
      {rows.length > 0 && (
        <Paper sx={{ width: "85%", overflow: "hidden", padding: "12px" 
        }} className="absolute top-[80px] left-[209px]">
          
          <Divider />
          <Box height={0} />
          <Stack direction="row" spacing={2} className="my-0.0 mb-0.0">
            {/* { <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            /> } */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            { <Button variant="contained" endIcon={<AddCircleIcon />}>
              Add
            </Button>}
          </Stack>
          
          <Box height={50} />
          
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow component={NavLink}
                         to="/user-details">
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Equipment Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                 Status
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Make
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Model no
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Qty
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Asset no
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Per Day Cost
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Per Month Cost
                  </TableCell>
                  {<TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        style={{cursor: 'pointer'}}
                        component={NavLink} to={`/user-details/${row.id}`}
                      >
                        <TableCell align="left">{row.Name}</TableCell>
                        <TableCell align="left">{row.Status}</TableCell>
                        <TableCell align="left">{row.Make}</TableCell>
                        <TableCell align="left">{row.Modelno}</TableCell>
                        <TableCell align="left">{row.Quantity}</TableCell>
                        <TableCell align="left">{row.Assetno}</TableCell>
                        <TableCell align="left">{row.Perdaycost}</TableCell>
                        <TableCell align="left">{row.Permonthcost}</TableCell>
                        {<TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              // onClick={() => editUser(row.id)}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell> }
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
