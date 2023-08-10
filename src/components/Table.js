import React from 'react'
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from '../data/mockData';



const Table = () => {
    
  
    const columns = [
      { field: "id", headerName: "ID", flex: 0.5 },
      { field: "registrarId", headerName: "Registrar ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderCell: ({ row: { status } }) => {
          return (
            <Box
              width="70%"
              m="0 auto"
              p="5px"
  
              display="flex"
              justifyContent="center"
              backgroundColor={
                status === "Completed"
                  ? `#19bb85`
                  : `red`
              }
              borderRadius="20px"
            >
              <Typography color={`white`} sx={{ ml: "5px" }}>
                {status}
              </Typography>
            </Box>
          );
        },
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
      },
      {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
      },
     
    ];
  
    return (
      <Box m="20px">
        
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{backgroundColor:'white'}}
        >
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    );
  };
  
  export default Table;