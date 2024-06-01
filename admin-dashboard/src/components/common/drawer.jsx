import React from 'react'
import styles from "./drawer.module.css"
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from "../../assets/image/logo.png"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppDrawer = (props) => {

  const { setSelectMenu, selectMenu } = props;

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  }
  return (
    <div className={styles.mainDiv}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#fff' }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
          <Link to='/'><Button sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} color="info" variant='outlined'><ExitToAppIcon/></Button></Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },

        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={logo} alt="logo" style={{ height: '7vh' }} />
        </Toolbar>

        <Divider />
        <List>
          {[{ text: "Dashboard", route: "/dashboard", icon: <DashboardIcon /> },
          { text: "Customer", route: "/customer", icon: <AssignmentIndIcon /> },
          { text: "Table", route: "/table", icon: <TableRestaurantIcon /> },
          { text: "Menu", route: "/menu", icon: <RestaurantMenuIcon /> }].map(({ text, route, icon }) => (
            <ListItem
              onClick={() => {
                setSelectMenu(text);
                handleNavigate(route);
              }}
              key={text}
              selected={selectMenu === text}
              disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>

          ))}
        </List>
        <Divider />
        {/*  <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>*/}
      </Drawer>
    </div>
  )
}

export default AppDrawer;

















