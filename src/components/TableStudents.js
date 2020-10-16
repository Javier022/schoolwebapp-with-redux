import React, { useEffect } from "react";

// // Redux
import { useDispatch, useSelector } from "react-redux";
import { getStudentsAction } from "../redux/studentsReducer";

// material IU
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// icons
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableStudents = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const students = useSelector((store) => store.students);

  if (students.success === false) {
    console.log(students.error);
    console.log(students.message);
  } else {
    console.log(students.message);
  }

  useEffect(() => {
    dispatch(getStudentsAction());
  }, [dispatch]);

  function createData(id, name, grade, seccion, subject) {
    return { id, name, grade, seccion, subject };
  }

  const rows = students.array.map((info) => {
    return createData(info.id, info.nombre, info.grado, info.seccion, "JS");
  });

  return (
    <>
      <div className="bg-blue-700 mx-12 h-auto">
        <Typography variant="h5" className="text-white" align="center">
          <AccountBoxRoundedIcon fontSize="large" />
          Estudiantes
        </Typography>
      </div>
      <div className="mx-12 mt-6">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">id </TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Grado</TableCell>
                <TableCell align="center">Sección</TableCell>
                <TableCell align="center">Materia</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.grade}</TableCell>
                  <TableCell align="center">{row.seccion}</TableCell>
                  <TableCell align="center">{row.subject}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default TableStudents;
