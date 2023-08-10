import React from 'react'
import { useState } from "react";
import Logo from '../../Images/Logo.png';
import { ProSidebar as Bar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { grey } from '@mui/material/colors';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';



const Item = ({ title, to, icon, selected, setSelected }) => {
   
    return (
      <MenuItem
        active={selected === title}
        style={{
          color:'black',
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };





function Sidebar() {
    
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `#fffefe !important`,
        paddingRight:'5%',
        height:`100vh`,
        // boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        backgroundColor: "#b0aaf1 !important",
        color: "white !important",
      },
      "& .pro-menu-item.active": {
        backgroundColor: "#392adb !important",
        color: "white !important",
      },
    }}
  >
    <Bar >
      <Menu iconShape="square">
        {/* LOGO AND MENU ICON */}
            <Box
              display="flex"
             
              alignItems="center"
              paddingBottom={`5%`}
              borderBottom={`1px solid grey`}
              
            >
            <img src={Logo} alt='Logo' style={{width:'2vw',height:'2vw',verticalAlign:'center'}} />

              <Typography style={{paddingLeft:'5%'}} variant="h6" color={grey}>
                Artemis
              </Typography>
            </Box>
        

        <Box>

          <Typography
            variant="body1"
            
            sx={{ m: "15px 0 5px 0" }}
          >
            MAIN
          </Typography>

          <Item
            title="Dashboard"
            to="/"
            icon={<AttractionsOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Discover"
            to="/discover"
            icon={<LanguageOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Users"
            to="/users"
            icon={<AccountBoxOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Documents"
            to="/documents"
            icon={<MenuBookOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />

          
          <Item
            title="Applications"
            to="/applications"
            icon={<AppsOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pages"
            to="/pages"
            icon={<FileOpenOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />

<Typography
            variant="body1"
           
            sx={{ m: "15px 0 5px 0" }}
          >
            SECONDARY
          </Typography>

          <Item
            title="Support Center"
            to="/support"
            icon={<ContactSupportOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />

          
          <Item
            title="Inbox"
            to="/inbox"
            icon={<InboxOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="File Manager"
            to="/file"
            icon={<FolderCopyOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Data List"
            
            to="/data"
            icon={<FormatListBulletedOutlinedIcon style={{color:'grey'}} />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Settings"
            to="/settings"
            icon={<SettingsOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Log Out"
            to="/"
            icon={<ExitToAppOutlinedIcon style={{color:'grey'}}/>}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Bar>
  </Box>
  )
}

export default Sidebar