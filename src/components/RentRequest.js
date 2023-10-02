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
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
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
  getDoc,
  updateDoc,
  deleteDoc,
  doc,query,where,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import StartupName from "../components/StartupName";



export default function RentRequest() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "Order");
  const q = query(empCollectionRef, where("Status", "==", "Pending"));

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(q);
    const filteredData = data.docs.map(doc => ({
      ...doc.data(), 
      id: doc.id
    })).filter(request => {
      return request.status !== 'OnRent' && request.status !== 'Rejected'; 
    });
    
    setRows(filteredData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCheckIconClick = async (id,pid,qty) => {

    const orderRef = doc(db, "Order", id);
  
    await updateDoc(orderRef, {
      Status: "OnRent"
    });
     // Decrement quantity in Equipments collection
  const equipmentRef = doc(db, "Equipments", pid);
  const equipmentDoc = await getDoc(equipmentRef);
  const prevQuantity = equipmentDoc.data().Quantity;
  await updateDoc(equipmentRef, {
    Quantity: prevQuantity - qty
  });
    getUsers();
  
  }

  const handleClearIconClick = async (id) => {

    const orderRef = doc(db, "Order", id);
  
    await updateDoc(orderRef, {
      Status: "Rejected"
    });

   
    getUsers();
  
  }

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

  const deleteApi = async (id,) => {
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
        <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}
        className="absolute top-[80px] left-4 ">
          
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <h4 className="font-popins">Rent Request</h4>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            {/* <Button variant="contained" endIcon={<AddCircleIcon />}>
              Add
            </Button> */}
          </Stack>
          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow >
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Equipment Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Quantity 
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Days
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Months
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Startup 
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Person 
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Price
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Accept 
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                  Reject
                  </TableCell>
                  
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
                      >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.max}</TableCell>
                        <TableCell align="left">{row.nodays}</TableCell>
                        <TableCell align="left">{row.nomonths}</TableCell>
                        <TableCell align="left"><StartupName uuid={row.Uuid}/></TableCell>
                        <TableCell align="left">{row.Person}</TableCell>
                        <TableCell align="left">{row.STotal}</TableCell>
                        <TableCell align="left" onClick={() => handleCheckIconClick(row.id,row.pid,row.max)}><CheckIcon/> </TableCell>
                        <TableCell align="left" onClick={() => handleClearIconClick(row.id)}><ClearIcon/></TableCell>
                        {/* <TableCell align="left">
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
                        </TableCell> */}
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
