import { Box, Typography } from '@mui/material'
import React from 'react'
import { mockDataTeam } from "../../data/mockData";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: "id", headerName: "ID" },
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
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
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
  ];
  

function index() {
    
  return (
   
        <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{backgroundColor:'white'}}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    
  )
}

export default index