import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function MembersListPage(){

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
    <Paper sx={{ width: '98%', overflow: 'hidden', padding: '12px' }}>
      {/* Primera parte: Encabezado */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" className="my-2 mb-2">
        <Typography variant="h6" component="div" sx={{ padding: '20px' }}>
          Lista de Miembros
        </Typography>
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
      </Stack>
      <Divider />
      <div className="p-4">
        {/* Segunda parte: Espacio para el listado o datos */}
        {/* Aquí puedes agregar componentes para mostrar los datos de los miembros */}
      </div>
    </Paper>
  );
}

export default MembersListPage;
