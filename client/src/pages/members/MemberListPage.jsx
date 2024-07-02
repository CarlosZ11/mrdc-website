import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MemberFormPage from './MemberFormPage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function MembersListPage(){

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rows, setRows] = useState([
    { name: 'John Doe', id: 1 },
    { name: 'Jane Smith', id: 2 },
  ]);

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      // Reset to initial data or fetch from backend
    }
  };

  return(
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MemberFormPage />
          </Box>
        </Modal>
      </div>

      <Paper sx={{ width: '98%', overflow: 'hidden', padding: '12px' }}>
        {/* Primera parte: Encabezado */}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: '20px' }}
        >
          Lista de Miembros
        </Typography>
        <Divider />
        <Box height={10} />

        {/* Segunda parte: Barra de herramientas */}
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
            getOptionLabel={(row) => row.name || ''}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Buscar Miembro" />
            )}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={handleOpen}
          >
            Agregar
          </Button>
        </Stack>
        <Box height={10} />

        {/* Tercera parte: Espacio para el listado o datos */}
        <div>
          {/* Inicialmente vacío, aquí se mostrarán los datos */}
        </div>
      </Paper>
    </>
  );
}

export default MembersListPage