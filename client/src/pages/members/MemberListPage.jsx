import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useMembers } from "../../context/MemberContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  { id: "documentId", label: "Documento", minWidth: 80, align: "left"  },
  { id: "firstName", label: "Nombre", minWidth: 100, align: "left"  },
  { id: "lastName", label: "Apellido", minWidth: 100, align: "left"  },
  { id: "age", label: "Edad", minWidth: 20, align: "left"  },
  { id: "phone", label: "Teléfono", minWidth: 100, align: "left" },
  {
    id: "birthDate",
    label: "Nacimiento",
    minWidth: 120,
    align: "left",
    format: (value) => new Date(value).toLocaleDateString("es-ES"),
  },
  { id: "address", label: "Dirección", minWidth: 150, align: "left"  },
  {
    id: "startYearChurch",
    label: "Año de Ingreso",
    minWidth: 10,
    align: "left",
    format: (value) => new Date(value).getFullYear().toString(),
  },
  { id: "ministry", label: "Ministerio", minWidth: 50 },
  {
    id: "baptismDate",
    label: "Fecha Bautismo",
    minWidth: 130,
    align: "left",
    format: (value) => new Date(value).toLocaleDateString("es-ES"),
  },
];

function MembersListPage() {
  const { getMembers, members } = useMembers();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const filterData = (v) => {
    if (v) {
      members([v]);
    } else {
      // Reset to initial data or fetch from backend
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: "12px" }}>
      {/* Primera parte: Encabezado */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className=" mb-2 pb-1"
      >
        <Typography variant="h6" component="div" sx={{ padding: "2px" }}>
          Lista de Miembros
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={members}
          sx={{ width: 300 }}
          onChange={(e, v) => filterData(v)}
          getOptionLabel={(member) => `${member.firstName} ${member.lastName}`}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Buscar Miembro" />
          )}
        />
      </Stack>
      <Divider />
      <div className="py-2">
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {members
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((member) => (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={member.documentId}
                  >
                    {columns.map((column) => {
                      const value = member[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value !== "undefined"
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default MembersListPage;
