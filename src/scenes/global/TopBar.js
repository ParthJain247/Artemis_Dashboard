import React from 'react'
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function TopBar() {
  return (
    <Box display='flex' justifyContent='space-between' p={2} >

        <Box display="flex"borderRadius="3px">
      <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Type to Search..." />
        
      </Box>

      <Box display="flex">
        <IconButton >
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Box >
            <Box>Thomas Brown</Box>
            <Box style={{color:'grey'}}>Developer</Box>
        </Box>
        <IconButton><AccountCircleOutlinedIcon /></IconButton>
        
     
    </Box>



    </Box>
  )
}

export default TopBar